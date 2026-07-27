import Image from "next/image";
import Link from "next/link";

const styles = {
  active: "text-(--maroon) font-bold",
  inactive: "font-thin",
};

export default function About() {
  return (
    <div className="px-auto sm:px-8 w-full flex flex-col lg:flex-row justify-around lg:justify-between sm:items-center">
      <figure className="mb-5 w-screen md:w-full text-center">
        <div className="img-container w-screen md:w-full h-70 md:h-120 sm:mx-auto relative">
          <Image
            className="object-contain md:object-cover lg:object-contain"
            src="/works/redroom/corner-5.png"
            alt="Akane is laying on a chair with one half of their body and floating in the air with the other half."
            layout="fill"
            priority
          />
        </div>
        <figcaption className="text-xs sm:text-sm text-gray-500">
          photo by Benja Thompson
        </figcaption>
      </figure>
      <main className="px-8 pb-10 lg:h-full lg:w-1/2 xl:w-3/4">
        <div className="about-container sm:w-md lg:w-xl text-md sm:text-xl sm:font-thin">
          <p className="mb-5 sm:mb-10">
            <b>Akane Little</b> is a Brooklyn-based dance artist approaching the
            body and performance as sites of ritual porosity, enlivened by
            flesh, blood, and attention to activate states of dimensional
            liminality. They started off in competition dance in a small-town
            studio in Mississippi, and continued on to study contemporary dance
            under Alysia Ramos at Oberlin College.
          </p>
          <p className="mb-5 sm:mb-10">
            They have freelanced in both Cleveland, OH (Catherine Meredith,
            Megan Young, Madi Jackson, Rebecca Burcher, and more) and New York
            City (Kinesis Project, Boy Friday, Hivewild, Hard/Femme Dances, God
            Complex x Aeon Andreas, Nick Brooke, Chaesong Kim, Glenn Potter-Takata, 
            and more). Commercial credits include Bridget Kearney (Lake
            Street Dive), Carolina Oliveros (Combo Chimbita), Tom Petty, and Sam
            Smith. Since 2023, they have been a core member of the
            Bessie-nominated <b>LEIMAY Ensemble</b> under the direction of
            Ximena Garnica & Shige Moriya.
          </p>
          <p>
            They approach each production as an altar, set with uncanny objects
            and activated by the choreographic disciplines of Western
            contemporary dance, ballet, drag, lip sync, Bible Belt competition
            dance, and LUDUS, a movement technique in the lineage of Butoh. Their work 
            is concerned with ritualized attention and porous experiences that aid with 
            remembering, pondering, and witnessing mythic worlds as answers to 
            the riddles of existentialism, absurdity, contradiction, beauty, and the abject.
            Their altars ring with hyper-specific sonic references that tether
            the work to conscious realities, and hold tender narrative arcs that
            are dimensionally deepened by the slippage between humor and horror. 
            Their work has been described as “viscerally tender and incisive" by
            <a href="https://www.dance-enthusiast.com/features/impressions-reviews/view/Etay-Axelroad-Akane-Little-Alex-Rodabaugh-Tiran-Willemse-Live-Artery-Under-the-Radar-The-Exponential-Festival-Out-FRONT-Festival">
              {" "}
              The Dance Enthusiast{" "}
            </a>
            and "raging with sincerity and longing" by{" "}
            <a href="https://www.culturebot.org/2026/03/103778/brief-flashes-of-aeon-andreas-faggotica/">
              Culturebot
            </a>
            . They were an inaugural Exponential Festival Self-Producing Fellow (2025-2026),
            and their work has been presented by Triskelion Arts (SPLIT BILL #46, 2025), 
            CAVE Home of LEIMAY (LEIMAY Constellation Salon 2025), Brick Aux (Exponential Festival 2026), 
            Dixon Place (Concrete BOOM! 2025), and The Tank (Pridefest 2025).
          </p>
        </div>
      </main>
    </div>
  );
}
