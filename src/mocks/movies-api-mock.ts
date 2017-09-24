import { GetPopularMoviesResult } from "../app/models/get-popular-movies-result";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/delay';

export class MoviesApiMock {
  movies = [
    {
      vote_count: 4578,
      id: 211672,
      video: false,
      vote_average: 6.4,
      title: "Minions",
      popularity: 898.484189,
      poster_path: "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
      original_language: "en",
      original_title: "Minions",
      genre_ids: [10751, 16, 12, 35],
      backdrop_path: "/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg",
      adult: false,
      overview:
        "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
      release_date: "2015-06-17"
    },
    {
      vote_count: 5309,
      id: 321612,
      video: false,
      vote_average: 6.8,
      title: "Beauty and the Beast",
      popularity: 649.962033,
      poster_path: "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
      original_language: "en",
      original_title: "Beauty and the Beast",
      genre_ids: [10751, 14, 10749],
      backdrop_path: "/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
      adult: false,
      overview:
        "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.",
      release_date: "2017-03-16"
    },
    {
      vote_count: 11003,
      id: 293660,
      video: false,
      vote_average: 7.4,
      title: "Deadpool",
      popularity: 596.613792,
      poster_path: "/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
      original_language: "en",
      original_title: "Deadpool",
      genre_ids: [28, 12, 35],
      backdrop_path: "/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg",
      adult: false,
      overview:
        "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
      release_date: "2016-02-09"
    },
    {
      vote_count: 10881,
      id: 157336,
      video: false,
      vote_average: 8.1,
      title: "Interstellar",
      popularity: 556.092744,
      poster_path: "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
      original_language: "en",
      original_title: "Interstellar",
      genre_ids: [12, 18, 878],
      backdrop_path: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      adult: false,
      overview:
        "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      release_date: "2014-11-05"
    },
    {
      vote_count: 972,
      id: 346364,
      video: false,
      vote_average: 7.6,
      title: "It",
      popularity: 540.512976,
      poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
      original_language: "en",
      original_title: "It",
      genre_ids: [12, 18, 27],
      backdrop_path: "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
      adult: false,
      overview:
        "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
      release_date: "2017-09-05"
    },
    {
      vote_count: 4577,
      id: 297762,
      video: false,
      vote_average: 7.2,
      title: "Wonder Woman",
      popularity: 484.189338,
      poster_path: "/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
      original_language: "en",
      original_title: "Wonder Woman",
      genre_ids: [28, 12, 14],
      backdrop_path: "/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
      adult: false,
      overview:
        "An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
      release_date: "2017-05-30"
    },
    {
      vote_count: 9751,
      id: 118340,
      video: false,
      vote_average: 7.8,
      title: "Guardians of the Galaxy",
      popularity: 474.621403,
      poster_path: "/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
      original_language: "en",
      original_title: "Guardians of the Galaxy",
      genre_ids: [28, 878, 12],
      backdrop_path: "/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
      adult: false,
      overview:
        "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
      release_date: "2014-07-30"
    },
    {
      vote_count: 9430,
      id: 76341,
      video: false,
      vote_average: 7.2,
      title: "Mad Max: Fury Road",
      popularity: 428.071931,
      poster_path: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      original_language: "en",
      original_title: "Mad Max: Fury Road",
      genre_ids: [28, 12, 878, 53],
      backdrop_path: "/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
      adult: false,
      overview:
        "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
      release_date: "2015-05-13"
    },
    {
      vote_count: 8670,
      id: 135397,
      video: false,
      vote_average: 6.5,
      title: "Jurassic World",
      popularity: 412.769858,
      poster_path: "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
      original_language: "en",
      original_title: "Jurassic World",
      genre_ids: [28, 12, 878, 53],
      backdrop_path: "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
      adult: false,
      overview:
        "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
      release_date: "2015-06-09"
    },
    {
      vote_count: 6992,
      id: 22,
      video: false,
      vote_average: 7.5,
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      popularity: 357.42675,
      poster_path: "/tkt9xR1kNX5R9rCebASKck44si2.jpg",
      original_language: "en",
      original_title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      genre_ids: [12, 14, 28],
      backdrop_path: "/8AUQ7YlJJA9C8kWk8P4YNHIcFDE.jpg",
      adult: false,
      overview:
        "Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her. But their seafaring mission is hardly simple.",
      release_date: "2003-07-09"
    },
    {
      vote_count: 6064,
      id: 263115,
      video: false,
      vote_average: 7.6,
      title: "Logan",
      popularity: 344.450985,
      poster_path: "/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg",
      original_language: "en",
      original_title: "Logan",
      genre_ids: [28, 18, 878],
      backdrop_path: "/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
      adult: false,
      overview:
        "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
      release_date: "2017-02-28"
    },
    {
      vote_count: 4522,
      id: 283995,
      video: false,
      vote_average: 7.6,
      title: "Guardians of the Galaxy Vol. 2",
      popularity: 329.972673,
      poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      original_language: "en",
      original_title: "Guardians of the Galaxy Vol. 2",
      genre_ids: [28, 12, 35, 878],
      backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
      adult: false,
      overview:
        "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      release_date: "2017-04-19"
    },
    {
      vote_count: 3185,
      id: 315635,
      video: false,
      vote_average: 7.3,
      title: "Spider-Man: Homecoming",
      popularity: 307.710397,
      poster_path: "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      original_language: "en",
      original_title: "Spider-Man: Homecoming",
      genre_ids: [28, 12, 35, 878],
      backdrop_path: "/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
      adult: false,
      overview:
        "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
      release_date: "2017-07-05"
    },
    {
      vote_count: 4416,
      id: 119450,
      video: false,
      vote_average: 7.3,
      title: "Dawn of the Planet of the Apes",
      popularity: 301.692527,
      poster_path: "/2EUAUIu5lHFlkj5FRryohlH6CRO.jpg",
      original_language: "en",
      original_title: "Dawn of the Planet of the Apes",
      genre_ids: [878, 28, 18, 53],
      backdrop_path: "/rjUl3pd1LHVOVfG4IGcyA1cId5l.jpg",
      adult: false,
      overview:
        "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
      release_date: "2014-06-26"
    },
    {
      vote_count: 12013,
      id: 155,
      video: false,
      vote_average: 8.2,
      title: "The Dark Knight",
      popularity: 276.431811,
      poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      original_language: "en",
      original_title: "The Dark Knight",
      genre_ids: [18, 28, 80, 53],
      backdrop_path: "/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg",
      adult: false,
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      release_date: "2008-07-16"
    },
    {
      vote_count: 5589,
      id: 131631,
      video: false,
      vote_average: 6.6,
      title: "The Hunger Games: Mockingjay - Part 1",
      popularity: 268.552513,
      poster_path: "/gj282Pniaa78ZJfbaixyLXnXEDI.jpg",
      original_language: "en",
      original_title: "The Hunger Games: Mockingjay - Part 1",
      genre_ids: [878, 12, 53],
      backdrop_path: "/4PwyB0ErucIANzW24Kori71J6gU.jpg",
      adult: false,
      overview:
        "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
      release_date: "2014-11-18"
    },
    {
      vote_count: 1836,
      id: 324852,
      video: false,
      vote_average: 6.2,
      title: "Despicable Me 3",
      popularity: 262.18836,
      poster_path: "/5qcUGqWoWhEsoQwNUrtf3y3fcWn.jpg",
      original_language: "en",
      original_title: "Despicable Me 3",
      genre_ids: [28, 16, 12, 10751, 35],
      backdrop_path: "/ftRkFtAGuHngHnLiOxktq0aCVMF.jpg",
      adult: false,
      overview:
        "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
      release_date: "2017-06-15"
    },
    {
      vote_count: 5340,
      id: 245891,
      video: false,
      vote_average: 7,
      title: "John Wick",
      popularity: 258.028855,
      poster_path: "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
      original_language: "en",
      original_title: "John Wick",
      genre_ids: [28, 53],
      backdrop_path: "/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg",
      adult: false,
      overview:
        "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
      release_date: "2014-10-22"
    },
    {
      vote_count: 6144,
      id: 177572,
      video: false,
      vote_average: 7.8,
      title: "Big Hero 6",
      popularity: 255.125634,
      poster_path: "/3zQvuSAUdC3mrx9vnSEpkFX0968.jpg",
      original_language: "en",
      original_title: "Big Hero 6",
      genre_ids: [12, 10751, 16, 28, 35],
      backdrop_path: "/2BXd0t9JdVqCp9sKf6kzMkr7QjB.jpg",
      adult: false,
      overview:
        "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
      release_date: "2014-10-24"
    },
    {
      vote_count: 7250,
      id: 271110,
      video: false,
      vote_average: 7.1,
      title: "Captain America: Civil War",
      popularity: 253.19811,
      poster_path: "/kSBXou5Ac7vEqKd97wotJumyJvU.jpg",
      original_language: "en",
      original_title: "Captain America: Civil War",
      genre_ids: [12, 28, 878],
      backdrop_path: "/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg",
      adult: false,
      overview:
        "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
      release_date: "2016-04-27"
    },
    {
      poster_path: null,
      adult: false,
      overview:
        'Go behind the scenes during One Directions sell out "Take Me Home" tour and experience life on the road.',
      release_date: "2013-08-30",
      genre_ids: [99, 10402],
      id: 164558,
      original_title: "One Direction: This Is Us",
      original_language: "en",
      title: "One Direction: This Is Us",
      backdrop_path: null,
      popularity: 1.166982,
      vote_count: 55,
      video: false,
      vote_average: 8.45
    },
    {
      poster_path: null,
      adult: false,
      overview: "",
      release_date: "1954-06-22",
      genre_ids: [80, 18],
      id: 654,
      original_title: "On the Waterfront",
      original_language: "en",
      title: "On the Waterfront",
      backdrop_path: null,
      popularity: 1.07031,
      vote_count: 51,
      video: false,
      vote_average: 8.19
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "A team of allied saboteurs are assigned an impossible mission: infiltrate an impregnable Nazi-held island and destroy the two enormous long-range field guns that prevent the rescue of 2,000 trapped British soldiers.",
      release_date: "1961-04-27",
      genre_ids: [28, 18, 12, 10752],
      id: 10911,
      original_title: "The Guns of Navarone",
      original_language: "en",
      title: "The Guns of Navarone",
      backdrop_path: null,
      popularity: 1.075583,
      vote_count: 50,
      video: false,
      vote_average: 7.56
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "The defendant In a murder trial says that he suffered temporary insanity after the victim had raped his wife. What is the truth, is his attorney being played, and will he win his case?",
      release_date: "1959-07-01",
      genre_ids: [80, 18, 9648, 53],
      id: 93,
      original_title: "Anatomy of a Murder",
      original_language: "en",
      title: "Anatomy of a Murder",
      backdrop_path: null,
      popularity: 1.05255,
      vote_count: 37,
      video: false,
      vote_average: 7.45
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Ellie Andrews has just tied the knot with society aviator King Westley when she is whisked away to her father's yacht and out of King's clutches. Ellie jumps ship and eventually winds up on a bus headed back to her husband. Reluctantly she must accept the help of out-of- work reporter Peter Warne. Actually, Warne doesn't give her any choice: either she sticks with him until he gets her back to her husband, or he'll blow the whistle on Ellie to her father. Either way, Peter gets what he wants... a really juicy newspaper story!",
      release_date: "1934-02-22",
      genre_ids: [35, 10749],
      id: 3078,
      original_title: "It Happened One Night",
      original_language: "en",
      title: "It Happened One Night",
      backdrop_path: null,
      popularity: 1.092661,
      vote_count: 48,
      video: false,
      vote_average: 7.3
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Lawrence of Arabia is the classic film from David Lean starring Peter O’Toole and based on the autobiography from Thomas Edward Lawrence who during the first World War was on assignment by the British Empire in Arabia. The film would become a cult classic and is known today as a masterpiece.",
      release_date: "1962-12-10",
      genre_ids: [12, 18, 36, 10752],
      id: 947,
      original_title: "Lawrence of Arabia",
      original_language: "en",
      title: "Lawrence of Arabia",
      backdrop_path: null,
      popularity: 1.080568,
      vote_count: 269,
      video: false,
      vote_average: 7.23
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Hildy Johnson has divorced Walter Burns and visits his office to tell him that she is engaged to another man and that they are going to get married the day after. Walter Burns can't let that happen and frames the other man, Bruce Baldwin, for a lot of stuff getting him into trouble all the time, while he tries to steer Hildy back into her old job as his employee (editor of his newspaper).",
      release_date: "1940-01-11",
      genre_ids: [35, 18, 10749],
      id: 3085,
      original_title: "His Girl Friday",
      original_language: "en",
      title: "His Girl Friday",
      backdrop_path: null,
      popularity: 1.026144,
      vote_count: 20,
      video: false,
      vote_average: 7.2
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Tough cop Dave Bannion takes on a politically powerful crime syndicate.",
      release_date: "1953-10-14",
      genre_ids: [80, 18],
      id: 14580,
      original_title: "The Big Heat",
      original_language: "en",
      title: "The Big Heat",
      backdrop_path: null,
      popularity: 1.01933,
      vote_count: 10,
      video: false,
      vote_average: 7.2
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Rich Mr. Dashwood dies, leaving his second wife and her daughters poor by the rules of inheritance. Two daughters are the titular opposites.",
      release_date: "1995-12-13",
      genre_ids: [18, 10749],
      id: 4584,
      original_title: "Sense and Sensibility",
      original_language: "en",
      title: "Sense and Sensibility",
      backdrop_path: null,
      popularity: 1.113657,
      vote_count: 82,
      video: false,
      vote_average: 7.15
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Ted Kramer is a career man for whom his work comes before his family. His wife Joanna cannot take this anymore, so she decides to leave him. Ted is now faced with the tasks of housekeeping and taking care of himself and their young son Billy. When he has learned to adjust his life to these new responsibilities, Joanna resurfaces and wants Billy back. Ted however refuses to give him up, so they go to court to fight for the custody of their son.",
      release_date: "1979-12-19",
      genre_ids: [18],
      id: 12102,
      original_title: "Kramer vs. Kramer",
      original_language: "en",
      title: "Kramer vs. Kramer",
      backdrop_path: null,
      popularity: 1.095982,
      vote_count: 68,
      video: false,
      vote_average: 7.15
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "A rule bound head butler's world of manners and decorum in the household he maintains is tested by the arrival of a housekeeper who falls in love with him in post-WWI Britain. The possibility of romance and his master's cultivation of ties with the Nazi cause challenge his carefully maintained veneer of servitude.",
      release_date: "1993-11-12",
      genre_ids: [18, 10749],
      id: 1245,
      original_title: "The Remains of the Day",
      original_language: "en",
      title: "The Remains of the Day",
      backdrop_path: null,
      popularity: 1.051793,
      vote_count: 37,
      video: false,
      vote_average: 7.11
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Tale of 19th century New York high society in which a young lawyer falls in love with a woman separated from her husband, while he is engaged to the woman's cousin.",
      release_date: "1993-09-17",
      genre_ids: [18, 10749],
      id: 10436,
      original_title: "The Age of Innocence",
      original_language: "en",
      title: "The Age of Innocence",
      backdrop_path: null,
      popularity: 1.086733,
      vote_count: 26,
      video: false,
      vote_average: 7.06
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "And Now for Something Completely Different is a film spin-off from the television comedy series Monty Python's Flying Circus featuring favourite sketches from the first two seasons.",
      release_date: "1971-09-28",
      genre_ids: [35],
      id: 9267,
      original_title: "And Now for Something Completely Different",
      original_language: "en",
      title: "And Now for Something Completely Different",
      backdrop_path: null,
      popularity: 1.015368,
      vote_count: 25,
      video: false,
      vote_average: 6.98
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "A narcissistic TV weatherman, along with his attractive-but-distant producer and mawkish cameraman, is sent to report on Groundhog Day in the small town of Punxsutawney, where he finds himself repeating the same day over and over.",
      release_date: "1993-02-11",
      genre_ids: [10749, 14, 18, 35],
      id: 137,
      original_title: "Groundhog Day",
      original_language: "en",
      title: "Groundhog Day",
      backdrop_path: null,
      popularity: 1.113645,
      vote_count: 549,
      video: false,
      vote_average: 6.98
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Longfellow Deeds lives in a small town, leading a small town kind of life. When a relative dies and leaves Deeds a fortune, Longfellow moves to the big city where he becomes an instant target for everyone. Deeds outwits them all until Babe Bennett comes along. When small-town boy meets big-city girl anything can, and does, happen.",
      release_date: "1936-04-12",
      genre_ids: [35, 18],
      id: 24807,
      original_title: "Mr. Deeds Goes to Town",
      original_language: "en",
      title: "Mr. Deeds Goes to Town",
      backdrop_path: null,
      popularity: 1.018888,
      vote_count: 11,
      video: false,
      vote_average: 6.95
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "A River Runs Through is a cinematographically stunning true story of Norman Maclean. The story follows Norman and his brother Paul through the experiences of life and growing up, and how their love of fly fishing keeps them together despite varying life circumstances in the untamed west of Montana in the 1920's.",
      release_date: "1992-10-09",
      genre_ids: [18],
      id: 293,
      original_title: "A River Runs Through It",
      original_language: "en",
      title: "A River Runs Through It",
      backdrop_path: null,
      popularity: 1.063204,
      vote_count: 69,
      video: false,
      vote_average: 6.75
    },
    {
      poster_path: null,
      adult: false,
      overview:
        'This Christmas movie highlights the technological advances of operations at the North Pole, revealing how Santa and his vast army of highly trained elves produce gifts and distribute them around the world in one night. However, every operation has a margin of error… When one of 600 million children to receive a gift from Santa on Christmas Eve is missed, it is deemed "acceptable" to all but one, Arthur. Arthur Claus is Santa’s misfit son who executes an unauthorized rookie mission to get the last present half way around the globe before dawn on Christmas morning.',
      release_date: "2011-11-23",
      genre_ids: [18, 16, 10751, 35],
      id: 51052,
      original_title: "Arthur Christmas",
      original_language: "en",
      title: "Arthur Christmas",
      backdrop_path: null,
      popularity: 1.099023,
      vote_count: 102,
      video: false,
      vote_average: 6.72
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "Football coach Harold Jones befriends Radio, a mentally-challenged man who becomes a student at T.L. Hanna High School in Anderson, South Carolina. Their friendship extends over several decades, where Radio transforms from a shy, tormented man into an inspiration to his community.",
      release_date: "2003-10-24",
      genre_ids: [18],
      id: 13920,
      original_title: "Radio",
      original_language: "en",
      title: "Radio",
      backdrop_path: null,
      popularity: 1.010795,
      vote_count: 36,
      video: false,
      vote_average: 6.71
    },
    {
      poster_path: null,
      adult: false,
      overview:
        'Amy is only 13 years old when her mother is killed. She goes to Canada to live with her father, an eccentric inventor whom she barely knows. Amy is miserable in her new life... until she discovers a nest of goose eggs that were abandoned when a local forest is torn down. The eggs hatch and Amy becomes "Mama Goose". When Winter comes, Amy, and her dad must find a way to lead the birds South...',
      release_date: "1996-09-13",
      genre_ids: [28, 12, 18, 10751],
      id: 11076,
      original_title: "Fly Away Home",
      original_language: "en",
      title: "Fly Away Home",
      backdrop_path: null,
      popularity: 1.022039,
      vote_count: 13,
      video: false,
      vote_average: 6.69
    },
    {
      poster_path: null,
      adult: false,
      overview:
        "With their father away as a chaplain in the Civil War, Jo, Meg, Beth and Amy grow up with their mother in somewhat reduced circumstances. They are a close family who inevitably have their squabbles and tragedies. But the bond holds even when, later, male friends start to become a part of the household.",
      release_date: "1994-12-21",
      genre_ids: [18, 10749],
      id: 9587,
      original_title: "Little Women",
      original_language: "en",
      title: "Little Women",
      backdrop_path: null,
      popularity: 1.051359,
      vote_count: 50,
      video: false,
      vote_average: 6.65
    }
  ];

  getPopularMovies(page) {
    const mockPageSize = 20;
    const pageCount = Math.ceil(this.movies.length / mockPageSize);
    const resultPage = Math.min(page, pageCount);
    const startIndex = (resultPage - 1) * mockPageSize;
    const endIndex = Math.min(startIndex + mockPageSize, this.movies.length);

    return new BehaviorSubject<GetPopularMoviesResult>({
      page: resultPage,
      results: this.movies.slice(startIndex, endIndex),
      total_results: this.movies.length,
      total_pages: pageCount
    }).delay(1000);
  }
}
