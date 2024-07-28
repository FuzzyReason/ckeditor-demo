import styles from "./page.module.css";

import dynamic from 'next/dynamic';

const CustomEditor = dynamic( () => import( '@/components/editor' ), { ssr: false } );

export default function Home() {
  return (
    <main className={styles.main}>
        <CustomEditor />
    </main>
  );
}
