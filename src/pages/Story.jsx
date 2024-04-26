import HTMLFlipBook from "react-pageflip";
import React, { useState, useEffect, useRef } from "react";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref}>
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">{props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
      </div>
    </div>
  );
});

function Story() {
  const [page, setPage] = useState(0);
  const flipBook = useRef();

  return (
    <>
      <HTMLFlipBook
        width={550}
        height={500}
        size="stretch"
        minWidth={115}
        maxWidth={600}
        minHeight={400}
        maxHeight={2533}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        // onFlip={onPage}
        className="demo-book"
        ref={flipBook}
      >
        <PageCover>Histoire de Jimmy</PageCover>
        <Page number={1}>
          <p>
            Jimmy l'Ours Polaire et le Grand Voyage Il était une fois, dans les
            vastes étendues glacées de l'Arctique, un jeune ours polaire nommé
            Jimmy. Jimmy était un ours curieux et joueur, qui aimait explorer
            son environnement et rencontrer de nouveaux amis.
            <br />
            <br /> Un jour, alors qu'il se promenait sur la banquise avec sa
            mère, il remarqua que quelque chose n'allait pas. Les étendues de
            glace semblaient fondre plus rapidement que d'habitude, et les
            poissons qu'ils chassaient étaient de plus en plus difficiles à
            trouver. Sa mère lui expliqua que c'était à cause du dérèglement
            climatique, un phénomène provoqué par les activités humaines qui
            réchauffait la planète.
            <br />
            <br /> Intrigué, Jimmy décida de partir à l'aventure pour comprendre
            ce qu'il se passait. Alors qu'il se dirigeait vers une région où la
            glace semblait plus stable, il aperçut au loin une étrange structure
            métallique. Curieux, il s'approcha et découvrit qu'il s'agissait
            d'un campement scientifique.
          </p>
        </Page>
        <Page number={2}>
          <p>
            Prudemment, Jimmy s'approcha des scientifiques qui travaillaient
            là-bas. Ces derniers étaient des spécialistes de l'Arctique, venus
            étudier les effets du changement climatique sur la région et ses
            habitants. Ils accueillirent Jimmy avec gentillesse, intrigués par
            la présence d'un ours polaire si près de leur campement.
            <br />
            <br /> Jimmy expliqua sa quête pour comprendre les changements qui
            affectaient son habitat. Touchés par sa détermination et son désir
            d'apprendre, les scientifiques décidèrent de l'aider. Ils lui
            montrèrent des cartes et des données qui montraient comment la fonte
            des glaces était devenue plus rapide au fil des années, et comment
            cela affectait la vie des animaux de l'Arctique.
            <br />
            <br /> Impressionné par leurs connaissances et reconnaissant de leur
            aide, Jimmy décida de travailler avec les scientifiques pour
            sensibiliser les autres animaux de l'Arctique et les humains à
            l'urgence d'agir pour protéger leur environnement
          </p>
        </Page>
        <Page number={3}>
          <p>
            Grâce à leur collaboration, ils purent sensibiliser un grand nombre
            de personnes à l'importance de protéger l'Arctique et ses habitants.
            Leur travail contribua à inspirer des actions concrètes pour réduire
            les émissions de gaz à effet de serre et préserver les habitats
            naturels des animaux.<br/><br/> Finalement, la banquise commença à se
            reconstituer, les poissons revinrent en abondance, et Jimmy et ses
            amis purent enfin vivre en paix dans leur environnement naturel
            préservé.<br/><br/> Et depuis ce jour, Jimmy l'ours polaire est devenu un
            symbole de la collaboration entre les animaux et les humains pour
            protéger la planète et ses habitants.
          </p>
        </Page>
        {/* <Page number={4}>Lorem ipsum...</Page> */}
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
    </>
  );
}

export default Story;
