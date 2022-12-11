import About from "../src/components/About/About";
import Header from "../src/components/Header/Header";
import client from "../src/sanity";

export default function Home({ header, about }) {
  return (
    <>
      <Header header={header} />
      <main>
        <About about={about} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);

  return {
    props: {
      header,
      about,
    },
  };
};

