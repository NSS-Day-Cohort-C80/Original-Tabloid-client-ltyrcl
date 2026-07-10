import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { getEmojis } from "../../managers/emojiManager";
import { getReactionsByPostId, getMyReaction, createReaction, deleteReaction } from "../../managers/reactionManager";

export default function PostReactions({ postId, currentUserId }) {
  const [emojis, setEmojis] = useState([]);
  const [counts, setCounts] = useState([]);
  const [selectedEmojiId, setSelectedEmojiId] = useState("");

  useEffect(() => {
    getEmojis().then(setEmojis);
  }, []);

  const loadCounts = () => getReactionsByPostId(postId).then(setCounts);

  useEffect(() => {
    loadCounts();
    getMyReaction(postId).then((myReaction) =>
      setSelectedEmojiId(myReaction.emojiId ? String(myReaction.emojiId) : "")
    );
  }, [postId]);

  const getCountForEmoji = (emoji) => {
    const match = counts.find((c) => c.emoji === emoji);
    return match ? match.count : 0;
  };

  const handleToggle = async (emojiId) => {
    const clicked = String(emojiId);

    if (clicked === selectedEmojiId) {
      await deleteReaction(postId, clicked, currentUserId);
      setSelectedEmojiId("");
    }     
    else {
      if (selectedEmojiId) {
        await deleteReaction(postId, selectedEmojiId, currentUserId);
      }
      await createReaction({
        emojiId: clicked,
        userId: currentUserId,
        postId: postId,
      });
      setSelectedEmojiId(clicked);
    }

    loadCounts();
  };

  return (
    <fieldset>
      <legend>React to this post</legend>
      {emojis.map((emoji) => {
        const isSelected = selectedEmojiId === String(emoji.id);
        return (
          <Button
            key={emoji.id}
            color="primary"
            outline
            active={isSelected}
            aria-pressed={isSelected}
            onClick={() => handleToggle(emoji.id)}
            className="me-2"
          >
            {emoji.symbol} {getCountForEmoji(emoji.symbol)}
          </Button>
        );
      })}
    </fieldset>
  );
}
