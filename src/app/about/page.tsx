import Image from "next/image";

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
            body and performance as an altar-portal for transmuting energy and
            channeling worlds. They started off in competition dance in a
            small-town studio in Mississippi, and continued on to study
            contemporary dance under Alysia Ramos at Oberlin College.
          </p>
          <p className="mb-5 sm:mb-10">
            They have freelanced in both Cleveland, OH (Catherine Meredith,
            Megan Young, Madi Jackson, Rebecca Burcher, and more) and New York City (Kinesis Project, 
            Boy Friday, Hivewild, Hard/Femme Dances, God Complex x Aeon Andreas, Nick Brooke, Michael 
            Chinworth, Chaesong Kim, and more). Commercial credits include Bridget Kearney (Lake Street 
            Dive), Carolina Oliveros (Combo Chimbita), Tom Petty, and Sam Smith. Since 2023, they have been a 
            core member of the LEIMAY Ensemble under the direction of Ximena Garnica & Shige Moriya.
          </p>
          <p>
            They approach each production as an altar, set with uncanny objects
            and activated by the choreographic disciplines of Western
            contemporary dance, ballet, drag, lip sync, competition dance from
            the Bible Belt, and Butoh. Their altars ring with hyper-specific
            sonic references that tether the work to conscious realities, and
            hold tender narrative arcs that are dimensionally deepened by the
            slippage between humor and horror.
          </p>
        </div>
      </main>
    </div>
  );
}
