import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CommunityPage from "./community/page";

export default function Home() {
  return (
    <div className={styles.flexColumnGap}>
      <h1>Time to get Started</h1>
      <p><Link href="/community">Community Page</Link></p>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">Meals/Share</Link></p>
      <p><Link href="meals/meal-post-1"> Meal Post 1 </Link></p>
      <p><Link href="meals/meal-post-2"> Meal Post 2 </Link></p>
    </div>
  );
}
