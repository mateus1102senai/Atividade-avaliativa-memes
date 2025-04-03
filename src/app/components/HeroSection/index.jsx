import styles from './hero.module.css';

const HeroSection = ({ meme }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{meme.title}</h1>
        <p className={styles.heroDescription}>{meme.description}</p>
        <div className={styles.heroAuthor}>
          <img src={meme.authorAvatar} alt={meme.author} />
          <span>Por {meme.author}</span>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={meme.image} alt={meme.title} className={styles.heroImage} />
      </div>
    </section>
  );
};

export default HeroSection;