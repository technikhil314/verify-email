import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from "fs";
import Markdown from 'markdown-to-jsx';

export default function Home({ markdownContent }) {
  console.log(typeof markdownContent);
  return (
    <div style={{
      display: 'flex',
      justifyContent: "center",
      alignContent: "center"
    }}>
      <Markdown>{markdownContent}</Markdown>
    </div >
  )
}

export async function getStaticProps() {
  const markdownContent = await fs.promises.readFile(`${process.cwd()}/README.md`);
  return {
    props: {
      markdownContent: markdownContent.toString()
    }
  }
}