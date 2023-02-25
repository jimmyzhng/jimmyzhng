import './index.scss';

// letterClass - the class we want to apply to the characters
// strArray are the characters themselves
// index - the starting point that helps us set the delay in the animation
export default function AnimatedLetters({ letterClass, strArray, index }) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>);
}
