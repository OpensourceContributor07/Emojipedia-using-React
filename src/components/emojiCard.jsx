import React from "react";
import Emoji from "./emoji";
import EmojiName from "./emojiName";
import EmojiMeaning from "./emojiMeaning";

function EmojiCard(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />
        <EmojiName name={props.name} />
      </dt>
      <EmojiMeaning meaning={props.meaning} />
    </div>
  );
}

export default EmojiCard;
