import { Article } from 'src/app/news/data/interfaces/article.interface';
import { Source } from 'src/app/news/data/interfaces/source.interface';

export const articlesMock = [
  {
    source: {
      id: null,
      name: 'MLB.com',
    },
    author: 'Brian McTaggart',
    title: "Jose Altuve on home run tear in Astros' game vs. Rangers - MLB.com",
    description:
      'ARLINGTON -- The legend of Jose Altuve grew even larger Tuesday night at Globe Life Field when the Astros’ second baseman blasted three home runs in three innings in a 14-1 blowout of the Rangers for his first career three-homer game in the regular season.\nAl…',
    url: 'https://www.mlb.com/news/jose-altuve-home-run-tear-in-astros-game-vs-rangers',
    urlToImage:
      'https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/ybvovyalgokkd0ddl4ai.jpg',
    publishedAt: '2023-09-06T03:53:15Z',
    content:
      'ARLINGTON -- The legend of Jose Altuve grew even larger Tuesday night at Globe Life Field when the Astros second baseman blasted three home runs in three innings in a 14-1 blowout of the Rangers for … [+2127 chars]',
  },
  {
    source: {
      id: null,
      name: 'BBC News',
    },
    author: 'https://www.facebook.com/bbcnews',
    title: 'Chevron and unions in talks to avert Australia LNG strike - BBC',
    description:
      'Workers are scheduled to begin a series of stoppages from Thursday in the dispute over pay and conditions.',
    url: 'https://www.bbc.com/news/business-66714132',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/81FF/production/_130997233_wheatstone-lng-first-cargo-departs-for-japan-d.jpg',
    publishedAt: '2023-09-06T03:34:26Z',
    content:
      'Chevron and unions representing workers at two major liquefied natural gas (LNG) facilities in Australia are holding last-ditch talks ahead of planned industrial action.\r\nWorkers are set to start a s… [+2628 chars]',
  },
  {
    source: {
      id: null,
      name: 'YouTube',
    },
    author: null,
    title: 'New Covid variant drives up Covid cases around U.S. - NBC News',
    description:
      'Covid cases are on the rise across the U.S. Health experts warn that new variants of the virus are driving up infections and hospitalizations.» Subscribe to ...',
    url: 'https://www.youtube.com/watch?v=8yrPUZCyFiY',
    urlToImage: 'https://i.ytimg.com/vi/8yrPUZCyFiY/maxresdefault.jpg',
    publishedAt: '2023-09-06T02:31:26Z',
    content: null,
  },
  {
    source: {
      id: 'associated-press',
      name: 'Associated Press',
    },
    author: 'LISA MASCARO, MARY CLARE JALONICK',
    title:
      "Sen. McConnell's health episodes show no evidence of stroke or seizure disorder but questions linger - The Associated Press",
    description:
      'The U.S. Capitol physician says 81-year-old Senate Republican Leader Mitch McConnell’s health episodes show no evidence of a stroke or seizure disorder. McConnell’s office released the information Tuesday as he returned to work at the Capitol. Questions have …',
    url: 'https://apnews.com/article/mitch-mcconnell-health-senate-doctor-162087fbf0d0c1dfa2c19beca1bd380f',
    urlToImage:
      'https://dims.apnews.com/dims4/default/0f1a668/2147483647/strip/true/crop/5555x3125+0+289/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F27%2Fd2%2F113165df9b84cdd07f05dd1511ea%2Fb40e851a4f54471fb4400577528b88fd',
    publishedAt: '2023-09-06T02:22:00Z',
    content:
      'WASHINGTON (AP) Senate Republican Leader Mitch McConnells health episodes show no evidence of a stroke or seizure disorder, the Capitol physician said Tuesday, but his statement still left questions … [+6688 chars]',
  },
  {
    source: {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English',
    },
    author: 'Al Jazeera',
    title:
      'At least 5 people killed as rainstorms, floods hit Turkey, Greece, Bulgaria - Al Jazeera English',
    description:
      'Four people killed in Turkey and Bulgaria and one killed in Greece following flash flooding with several still missing.',
    url: 'https://www.aljazeera.com/news/2023/9/6/at-least-5-people-killed-as-rainstorms-floods-hit-turkey-greece-bulgaria',
    urlToImage:
      'https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-05T093545Z_375974606_RC2923A3S26S_RTRMADP_3_EUROPE-WEATHER-GREECE-STORM-1693924395.jpg?resize=1920%2C1440',
    publishedAt: '2023-09-06T01:54:24Z',
    content:
      'At least five people have been killed in torrential rainstorms and flooding in Greece, Turkey, and Bulgaria, including two people who were washed away when floodwaters swept through a camping ground … [+3888 chars]',
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'Dan Rosenzweig-Ziff',
    title:
      'NYPD changes policy on ‘kettling’ after civil liberties groups sue - The Washington Post',
    description:
      'The New York Police Department has agreed to restrict “kettling” and other practices that drew use-of-force complaints during the George Floyd protests.',
    url: 'https://www.washingtonpost.com/nation/2023/09/05/new-york-police-changes-force/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WC2ZXGYQ4APEWGS2TNTDO6K2VA_size-normalized.jpg&w=1440',
    publishedAt: '2023-09-06T01:00:35Z',
    content:
      'Comment on this story\r\nComment\r\nThe New York Police Department has agreed to change its use-of-force policies in a settlement over four lawsuits stemming from the 2020 protests that followed the murd… [+6162 chars]',
  },
  {
    source: {
      id: null,
      name: '[Removed]',
    },
    author: null,
    title: '[Removed]',
    description: '[Removed]',
    url: 'https://removed.com',
    urlToImage: null,
    publishedAt: '1970-01-01T00:00:00Z',
    content: '[Removed]',
  },
  {
    source: {
      id: null,
      name: "Investor's Business Daily",
    },
    author: "Investor's Business Daily",
    title:
      "Dow Jones Futures: Rising Yields Curb Market Rally; Tesla Leads 5 Stocks Just Below Buy Points - Investor's Business Daily",
    description: null,
    url: 'https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-rising-yields-curb-market-rally-tesla-leads-5-stocks-of-cusp-of-buy-points/',
    urlToImage: null,
    publishedAt: '2023-09-06T00:17:00Z',
    content: null,
  },
  {
    source: {
      id: 'espn',
      name: 'ESPN',
    },
    author: 'Eric Karabell',
    title:
      'Fantasy football superflex rankings 2023: Week 1 QB, RB, WR, TE - ESPN',
    description:
      'Trying to decide between a couple of closely ranked fantasy football players this week? Eric Karabell ranks the top 150 QBs, RBs, WRs and TEs to make the decision easy for you.',
    url: 'https://www.espn.com/fantasy/football/story/_/id/38284782/fantasy-football-superflex-rankings-2023-qb-rb-wr-te-week-1',
    urlToImage:
      'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0825%2Fr1215534_1296x729_16%2D9.jpg',
    publishedAt: '2023-09-06T00:12:28Z',
    content:
      'Welcome to Week 1 of the 2023 NFL season and our weekly PPR fantasy football superflex rankings. We know many of you compete in superflex formats that invite/covet second quarterbacks in starting lin… [+11326 chars]',
  },
  {
    source: {
      id: null,
      name: 'BBC News',
    },
    author: 'https://www.facebook.com/bbcnews',
    title: 'Brazilian state reels after its worst cyclone disaster - BBC',
    description:
      'At least 21 people die in the state of Rio Grande do Sul, with more flooding expected.',
    url: 'https://www.bbc.com/news/world-latin-america-66725124',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/431B/production/_130997171_mediaitem130997167.jpg',
    publishedAt: '2023-09-05T23:56:25Z',
    content:
      'Media caption, Watch: Deadly cyclone in southern Brazil kills 21 people\r\nTorrential rain and winds caused by a cyclone have left at least 21 people dead in southern Brazil, with more flooding expecte… [+2013 chars]',
  },
  {
    source: {
      id: null,
      name: '[Removed]',
    },
    author: null,
    title: '[Removed]',
    description: '[Removed]',
    url: 'https://removed.com',
    urlToImage: null,
    publishedAt: '1970-01-01T00:00:00Z',
    content: '[Removed]',
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News',
    },
    author: null,
    title:
      "Federal court rejects Alabama's congressional map, will draw new districts to boost Black voting power - CBS News",
    description:
      "A three-judge panel has blocked Alabama's new congressional map after lawmakers failed to create a second district where Black voters at least came close to comprising a majority, as suggested by the court.",
    url: 'https://www.cbsnews.com/news/alabamas-congressional-districts-rejected-federal-court-majority-black-voters-district/',
    urlToImage:
      'https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/31/afc9663c-6848-4a3f-9e7d-95febd0e1c81/thumbnail/1200x630/f11273183288cd685428bf0d8d92277b/ap23199766973395.jpg?v=bd30f47a894d621fb3691fc64d1442e9',
    publishedAt: '2023-09-05T23:46:00Z',
    content:
      'Federal judges said Tuesday that they will draft new congressional lines for Alabama after lawmakers refused to create a second district where Black voters at least came close to comprising a majorit… [+4304 chars]',
  },
  {
    source: {
      id: null,
      name: 'PEOPLE',
    },
    author: 'https://www.facebook.com/peoplemag',
    title:
      "'Price Is Right' Host Bob Barker's Cause of Death Revealed - PEOPLE",
    description:
      "TV personality Bob Barker — whose death at age 99 was announced on Aug. 26, just four months shy from his 100th birthday — died as a result of Alzheimer's Disease, according to his death certificate obtained by PEOPLE",
    url: 'https://people.com/bob-barker-cause-of-death-7965776',
    urlToImage:
      'https://people.com/thmb/m1NSgTyjCIT2pBMx4LiaoA5dyHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/bob-barker-tout-090523-2f7dc6fad6d44feda8811a8df0607df6.jpg',
    publishedAt: '2023-09-05T23:09:53Z',
    content:
      "Bob Barkers cause of death has been revealed.\r\nThe host of ThePrice Is Right, whodied late last month at age 99 in his Hollywood Hills home, died as a result of Alzheimer's Disease, according to his … [+2981 chars]",
  },
  {
    source: {
      id: null,
      name: '[Removed]',
    },
    author: null,
    title: '[Removed]',
    description: '[Removed]',
    url: 'https://removed.com',
    urlToImage: null,
    publishedAt: '1970-01-01T00:00:00Z',
    content: '[Removed]',
  },
  {
    source: {
      id: null,
      name: 'Vulture',
    },
    author: 'Alejandra Gularte',
    title:
      'Kylie Jenner & Timothée Chalamet Spotted at Beyoncé Concert - Vulture',
    description:
      'Kylie Jenner and Timothée Chalamet were spotted together in the VIP section at Beyoncé’s special birthday concert at Sofi Stadium in Los Angeles for the Renaissance World Tour.',
    url: 'http://www.vulture.com/2023/09/kylie-jenner-timothee-chalamet-spotted.html',
    urlToImage:
      'https://pyxis.nymag.com/v1/imgs/788/924/452fcb1cadc400f108b10d5ac8406a61ae-kylie-jenner-timothee-chalamet.1x.rsocial.w1200.jpg',
    publishedAt: '2023-09-05T23:05:00Z',
    content:
      'No, were being serious. When Kylie Jenner and Timothée Chalamet dating rumors started swirling like a Wonka lollipop in April, it felt forgettable. They were never actually seen together; only news o… [+1035 chars]',
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'Brenda Goodman',
    title: 'CDC warns that RSV cases may be starting to rise - CNN',
    description:
      'The U.S. Centers for Disease Control and Prevention is warning physicians that cases of respiratory syncytial virus, or RSV, are rising in the South, and that the regional increase may portend increases in the rest of the U.S. over the next two to three month…',
    url: 'https://www.cnn.com/2023/09/05/health/rsv-cdc-health-alert/index.html',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/230404133958-rsv-respiratory-syncytial-virus-microscope-file.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2023-09-05T22:55:00Z',
    content:
      'The US Centers for Disease Control and Prevention is warning physicians that cases of respiratory syncytial virus, known as RSV, are rising in the Southeast and that regional increase may portend a r… [+2386 chars]',
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'George Ramsay, Patrick Sung, Ben Morse',
    title:
      'Spain women’s soccer team appoints first female coach after predecessor fired amid unwanted World Cup kiss fallout - CNN',
    description:
      'The Spanish women’s soccer team appointed its first ever female head coach after her predecessor was fired on the same day amid ongoing fallout over an unwanted kiss given by soccer chief Luis Rubiales to a player at the Women’s World Cup final.',
    url: 'https://www.cnn.com/2023/09/05/football/jorge-vilda-sacked-spain-coach-rfef-spt-intl/index.html',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/230901125155-01-jorge-vilda-luis-rubiales.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2023-09-05T22:08:00Z',
    content:
      'The Spanish womens soccer team appointed its first ever female head coach after her predecessor was fired on the same day amid ongoing fallout over an unwanted kiss given by soccer chief Luis Rubiale… [+5330 chars]',
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'Mary Gilbert, Nouran Salahieh',
    title:
      'Tropical Storm Lee is expected to rapidly intensify into an ‘extremely dangerous’ hurricane in the Atlantic by this weekend - CNN',
    description:
      'Tropical Storm Lee is expected to rapidly intensify into an “extremely dangerous” hurricane  in the Atlantic Ocean by this weekend, the National Hurricane Center said Tuesday as the season approaches its typical early September peak.',
    url: 'https://www.cnn.com/2023/09/05/weather/atlantic-tropical-storm-hurricane-season-climate/index.html',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/230905114858-td13initial09052023.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2023-09-05T22:06:00Z',
    content:
      'Tropical Storm Lee is expected to rapidly intensify into an extremely dangerous hurricane in the Atlantic Ocean by this weekend, the National Hurricane Center said Tuesday as the season approaches it… [+3186 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Rich Mckay',
    title:
      'Dozens face RICO charges over Atlanta police center protests - Reuters',
    description:
      'More than five dozen activists have been charged with an illegal conspiracy to stop construction of an Atlanta police training center, derisively called "Cop City," that has been the target of sometimes violent protests in recent months.',
    url: 'https://www.reuters.com/legal/dozens-face-rico-charges-over-atlanta-police-center-protests-2023-09-05/',
    urlToImage:
      'https://www.reuters.com/resizer/M2rBPOXNmlGLeaAc7xysksEkMg8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VFFPRLKVT5MPTK4PMJFZFP44Z4.jpg',
    publishedAt: '2023-09-05T21:57:00Z',
    content:
      'ATLANTA, Sept 5 (Reuters) - More than five dozen activists have been charged with an illegal conspiracy to stop construction of an Atlanta police training center, derisively called "Cop City," that h… [+2461 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Brian Sozzi',
    title:
      "Goldman Sachs chief economist: US consumer won't break in 2024 - Yahoo Finance",
    description:
      'Goldman Sachs top economist reveals a somewhat contrarian take on the US consumer for 2024.',
    url: 'https://finance.yahoo.com/news/goldman-sachs-chief-economist-us-consumer-wont-break-in-2024-212928011.html',
    urlToImage:
      'https://s.yimg.com/ny/api/res/1.2/LNxsPWcW4Fy6NW.hotYeKw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/9fc4df70-4c23-11ee-bfd7-cd4c0b5b36ee',
    publishedAt: '2023-09-05T21:29:28Z',
    content:
      "US consumers may be showing signs of stress, but don't expect them to break in 2024.\r\nThat's the contention from Goldman Sachs chief economist Jan Hatzius.\r\n\"At a macro level, if there was only one i… [+2875 chars]",
  },
] as Article[];

export const sourcesMock = [
  {
    id: 'abc-news',
    name: 'ABC News',
    description:
      'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
    url: 'https://abcnews.go.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'abc-news-au',
    name: 'ABC News (AU)',
    description:
      "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
    url: 'http://www.abc.net.au/news',
    category: 'general',
    language: 'en',
    country: 'au',
  },
  {
    id: 'aftenposten',
    name: 'Aftenposten',
    description:
      'Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.',
    url: 'https://www.aftenposten.no',
    category: 'general',
    language: 'no',
    country: 'no',
  },
  {
    id: 'al-jazeera-english',
    name: 'Al Jazeera English',
    description:
      'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    url: 'http://www.aljazeera.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'ansa',
    name: 'ANSA.it',
    description:
      'Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.',
    url: 'http://www.ansa.it',
    category: 'general',
    language: 'it',
    country: 'it',
  },
  {
    id: 'argaam',
    name: 'Argaam',
    description:
      'ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداول - تاسي - مع تغطيه معمقة لشركات واسعار ومنتجات البتروكيماويات , تقارير مالية الاكتتابات الجديده ',
    url: 'http://www.argaam.com',
    category: 'business',
    language: 'ar',
    country: 'sa',
  },
  {
    id: 'ars-technica',
    name: 'Ars Technica',
    description:
      "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
    url: 'http://arstechnica.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'ary-news',
    name: 'Ary News',
    description:
      'ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.',
    url: 'https://arynews.tv/ud/',
    category: 'general',
    language: 'ud',
    country: 'pk',
  },
  {
    id: 'associated-press',
    name: 'Associated Press',
    description:
      'The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.',
    url: 'https://apnews.com/',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'australian-financial-review',
    name: 'Australian Financial Review',
    description:
      'The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.',
    url: 'http://www.afr.com',
    category: 'business',
    language: 'en',
    country: 'au',
  },
  {
    id: 'axios',
    name: 'Axios',
    description:
      'Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.',
    url: 'https://www.axios.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'bbc-news',
    name: 'BBC News',
    description:
      'Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.',
    url: 'http://www.bbc.co.uk/news',
    category: 'general',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'bbc-sport',
    name: 'BBC Sport',
    description:
      'The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.',
    url: 'http://www.bbc.co.uk/sport',
    category: 'sports',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'bild',
    name: 'Bild',
    description:
      'Die Seite 1 für aktuelle Nachrichten und Themen, Bilder und Videos aus den Bereichen News, Wirtschaft, Politik, Show, Sport, und Promis.',
    url: 'http://www.bild.de',
    category: 'general',
    language: 'de',
    country: 'de',
  },
  {
    id: 'blasting-news-br',
    name: 'Blasting News (BR)',
    description:
      'Descubra a seção brasileira da Blasting News, a primeira revista feita pelo  público, com notícias globais e vídeos independentes. Junte-se a nós e torne- se um repórter.',
    url: 'https://br.blastingnews.com',
    category: 'general',
    language: 'pt',
    country: 'br',
  },
  {
    id: 'bleacher-report',
    name: 'Bleacher Report',
    description:
      'Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!',
    url: 'http://www.bleacherreport.com',
    category: 'sports',
    language: 'en',
    country: 'us',
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    description:
      'Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.',
    url: 'http://www.bloomberg.com',
    category: 'business',
    language: 'en',
    country: 'us',
  },
  {
    id: 'breitbart-news',
    name: 'Breitbart News',
    description:
      'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
    url: 'http://www.breitbart.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'business-insider',
    name: 'Business Insider',
    description:
      'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
    url: 'http://www.businessinsider.com',
    category: 'business',
    language: 'en',
    country: 'us',
  },
  {
    id: 'business-insider-uk',
    name: 'Business Insider (UK)',
    description:
      'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
    url: 'http://uk.businessinsider.com',
    category: 'business',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'buzzfeed',
    name: 'Buzzfeed',
    description:
      'BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.',
    url: 'https://www.buzzfeed.com',
    category: 'entertainment',
    language: 'en',
    country: 'us',
  },
  {
    id: 'cbc-news',
    name: 'CBC News',
    description:
      "CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.",
    url: 'http://www.cbc.ca/news',
    category: 'general',
    language: 'en',
    country: 'ca',
  },
  {
    id: 'cbs-news',
    name: 'CBS News',
    description:
      'CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.',
    url: 'http://www.cbsnews.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'cnn',
    name: 'CNN',
    description:
      'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN',
    url: 'http://us.cnn.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'cnn-es',
    name: 'CNN Spanish',
    description:
      'Lee las últimas noticias e información sobre Latinoamérica, Estados Unidos, mundo, entretenimiento, política, salud, tecnología y deportes en CNNEspañol.com.',
    url: 'http://cnnespanol.cnn.com/',
    category: 'general',
    language: 'es',
    country: 'us',
  },
  {
    id: 'crypto-coins-news',
    name: 'Crypto Coins News',
    description:
      'Providing breaking cryptocurrency news - focusing on Bitcoin, Ethereum, ICOs, blockchain technology, and smart contracts.',
    url: 'https://www.ccn.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'der-tagesspiegel',
    name: 'Der Tagesspiegel',
    description:
      'Nachrichten, News und neueste Meldungen aus dem Inland und dem Ausland - aktuell präsentiert von tagesspiegel.de.',
    url: 'http://www.tagesspiegel.de',
    category: 'general',
    language: 'de',
    country: 'de',
  },
  {
    id: 'die-zeit',
    name: 'Die Zeit',
    description:
      'Aktuelle Nachrichten, Kommentare, Analysen und Hintergrundberichte aus Politik, Wirtschaft, Gesellschaft, Wissen, Kultur und Sport lesen Sie auf ZEIT ONLINE.',
    url: 'http://www.zeit.de/index',
    category: 'business',
    language: 'de',
    country: 'de',
  },
  {
    id: 'el-mundo',
    name: 'El Mundo',
    description:
      'Noticias, actualidad, álbumes, debates, sociedad, servicios, entretenimiento y última hora en España y el mundo.',
    url: 'http://www.elmundo.es',
    category: 'general',
    language: 'es',
    country: 'es',
  },
  {
    id: 'engadget',
    name: 'Engadget',
    description:
      'Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.',
    url: 'https://www.engadget.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'entertainment-weekly',
    name: 'Entertainment Weekly',
    description:
      'Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.',
    url: 'http://www.ew.com',
    category: 'entertainment',
    language: 'en',
    country: 'us',
  },
  {
    id: 'espn',
    name: 'ESPN',
    description:
      'ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.',
    url: 'https://www.espn.com',
    category: 'sports',
    language: 'en',
    country: 'us',
  },
  {
    id: 'espn-cric-info',
    name: 'ESPN Cric Info',
    description:
      'ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.',
    url: 'http://www.espncricinfo.com/',
    category: 'sports',
    language: 'en',
    country: 'us',
  },
  {
    id: 'financial-post',
    name: 'Financial Post',
    description:
      'Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.',
    url: 'http://business.financialpost.com',
    category: 'business',
    language: 'en',
    country: 'ca',
  },
  {
    id: 'focus',
    name: 'Focus',
    description:
      'Minutenaktuelle Nachrichten und Service-Informationen von Deutschlands modernem Nachrichtenmagazin.',
    url: 'http://www.focus.de',
    category: 'general',
    language: 'de',
    country: 'de',
  },
  {
    id: 'football-italia',
    name: 'Football Italia',
    description:
      'Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.',
    url: 'http://www.football-italia.net',
    category: 'sports',
    language: 'en',
    country: 'it',
  },
  {
    id: 'fortune',
    name: 'Fortune',
    description: 'Fortune 500 Daily and Breaking Business News',
    url: 'http://fortune.com',
    category: 'business',
    language: 'en',
    country: 'us',
  },
  {
    id: 'four-four-two',
    name: 'FourFourTwo',
    description:
      'The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.',
    url: 'http://www.fourfourtwo.com/news',
    category: 'sports',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'fox-news',
    name: 'Fox News',
    description:
      'Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.',
    url: 'http://www.foxnews.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'fox-sports',
    name: 'Fox Sports',
    description:
      'Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.',
    url: 'http://www.foxsports.com',
    category: 'sports',
    language: 'en',
    country: 'us',
  },
  {
    id: 'globo',
    name: 'Globo',
    description:
      'Só na globo.com você encontra tudo sobre o conteúdo e marcas do Grupo Globo. O melhor acervo de vídeos online sobre entretenimento, esportes e jornalismo do Brasil.',
    url: 'http://www.globo.com/',
    category: 'general',
    language: 'pt',
    country: 'br',
  },
  {
    id: 'google-news',
    name: 'Google News',
    description:
      'Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'google-news-ar',
    name: 'Google News (Argentina)',
    description:
      'Completa cobertura actualizada de noticias agregadas a partir de fuentes de todo el mundo por Google Noticias.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'es',
    country: 'ar',
  },
  {
    id: 'google-news-au',
    name: 'Google News (Australia)',
    description:
      'Comprehensive, up-to-date Australia news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'au',
  },
  {
    id: 'google-news-br',
    name: 'Google News (Brasil)',
    description:
      'Cobertura jornalística abrangente e atualizada, agregada de fontes do mundo inteiro pelo Google Notícias.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'pt',
    country: 'br',
  },
  {
    id: 'google-news-ca',
    name: 'Google News (Canada)',
    description:
      'Comprehensive, up-to-date Canada news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'ca',
  },
  {
    id: 'google-news-fr',
    name: 'Google News (France)',
    description:
      'Informations complètes et à jour, compilées par Google Actualités à partir de sources d&#39;actualités du monde entier.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'fr',
    country: 'fr',
  },
  {
    id: 'google-news-in',
    name: 'Google News (India)',
    description:
      'Comprehensive, up-to-date India news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'in',
  },
  {
    id: 'google-news-is',
    name: 'Google News (Israel)',
    description:
      'כיסוי מקיף ועדכני של חדשות שהצטברו ממקורות בכל העולם על ידי &#39;חדשות Google&#39;.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'he',
    country: 'is',
  },
  {
    id: 'google-news-it',
    name: 'Google News (Italy)',
    description:
      'Copertura giornalistica completa e aggiornata ottenuta combinando fonti di notizie in tutto il mondo attraverso Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'it',
    country: 'it',
  },
  {
    id: 'google-news-ru',
    name: 'Google News (Russia)',
    description:
      'Исчерпывающая и актуальная информация, собранная службой &quot;Новости Google&quot; со всего света.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'ru',
    country: 'ru',
  },
  {
    id: 'google-news-sa',
    name: 'Google News (Saudi Arabia)',
    description:
      'تغطية شاملة ومتجددة للأخبار، تم جمعها من مصادر أخبار من جميع أنحاء العالم بواسطة أخبار Google.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'ar',
    country: 'sa',
  },
  {
    id: 'google-news-uk',
    name: 'Google News (UK)',
    description:
      'Comprehensive, up-to-date UK news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'goteborgs-posten',
    name: 'Göteborgs-Posten',
    description:
      'Göteborgs-Posten, abbreviated GP, is a major Swedish language daily newspaper published in Gothenburg, Sweden.',
    url: 'http://www.gp.se',
    category: 'general',
    language: 'sv',
    country: 'se',
  },
  {
    id: 'gruenderszene',
    name: 'Gruenderszene',
    description:
      'Online-Magazin für Startups und die digitale Wirtschaft. News und Hintergründe zu Investment, VC und Gründungen.',
    url: 'http://www.gruenderszene.de',
    category: 'technology',
    language: 'de',
    country: 'de',
  },
  {
    id: 'hacker-news',
    name: 'Hacker News',
    description:
      'Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham\'s investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as "anything that gratifies one\'s intellectual curiosity".',
    url: 'https://news.ycombinator.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'handelsblatt',
    name: 'Handelsblatt',
    description:
      'Auf Handelsblatt lesen sie Nachrichten über Unternehmen, Finanzen, Politik und Technik. Verwalten Sie Ihre Finanzanlagen mit Hilfe unserer Börsenkurse.',
    url: 'http://www.handelsblatt.com',
    category: 'business',
    language: 'de',
    country: 'de',
  },
  {
    id: 'ign',
    name: 'IGN',
    description:
      'IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.',
    url: 'http://www.ign.com',
    category: 'entertainment',
    language: 'en',
    country: 'us',
  },
  {
    id: 'il-sole-24-ore',
    name: 'Il Sole 24 Ore',
    description:
      'Notizie di economia, cronaca italiana ed estera, quotazioni borsa in tempo reale e di finanza, norme e tributi, fondi e obbligazioni, mutui, prestiti e lavoro a cura de Il Sole 24 Ore.',
    url: 'https://www.ilsole24ore.com',
    category: 'business',
    language: 'it',
    country: 'it',
  },
  {
    id: 'independent',
    name: 'Independent',
    description:
      'National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.',
    url: 'http://www.independent.co.uk',
    category: 'general',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'infobae',
    name: 'Infobae',
    description:
      'Noticias de Argentina y del mundo en tiempo real. Información, videos y fotos sobre los hechos más relevantes y sus protagonistas. Léelo antes en infobae.',
    url: 'http://www.infobae.com/?noredirect',
    category: 'general',
    language: 'es',
    country: 'ar',
  },
  {
    id: 'info-money',
    name: 'InfoMoney',
    description:
      'No InfoMoney você encontra tudo o que precisa sobre dinheiro. Ações, investimentos, bolsas de valores e muito mais. Aqui você encontra informação que vale dinheiro!',
    url: 'https://www.infomoney.com.br',
    category: 'business',
    language: 'pt',
    country: 'br',
  },
  {
    id: 'la-gaceta',
    name: 'La Gaceta',
    description:
      'El diario de Tucumán, noticias 24 horas online - San Miguel de Tucumán - Argentina - Ultimo momento - Ultimas noticias.',
    url: 'http://www.lagaceta.com.ar',
    category: 'general',
    language: 'es',
    country: 'ar',
  },
  {
    id: 'la-nacion',
    name: 'La Nacion',
    description:
      'Información confiable en Internet. Noticias de Argentina y del mundo - ¡Informate ya!',
    url: 'http://www.lanacion.com.ar',
    category: 'general',
    language: 'es',
    country: 'ar',
  },
  {
    id: 'la-repubblica',
    name: 'La Repubblica',
    description:
      'Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.',
    url: 'http://www.repubblica.it',
    category: 'general',
    language: 'it',
    country: 'it',
  },
  {
    id: 'le-monde',
    name: 'Le Monde',
    description:
      "Les articles du journal et toute l'actualit&eacute; en continu : International, France, Soci&eacute;t&eacute;, Economie, Culture, Environnement, Blogs ...",
    url: 'http://www.lemonde.fr',
    category: 'general',
    language: 'fr',
    country: 'fr',
  },
  {
    id: 'lenta',
    name: 'Lenta',
    description:
      'Новости, статьи, фотографии, видео. Семь дней в неделю, 24 часа в сутки.',
    url: 'https://lenta.ru',
    category: 'general',
    language: 'ru',
    country: 'ru',
  },
  {
    id: 'lequipe',
    name: "L'equipe",
    description:
      "Le sport en direct sur L'EQUIPE.fr. Les informations, résultats et classements de tous les sports. Directs commentés, images et vidéos à regarder et à partager !",
    url: 'https://www.lequipe.fr',
    category: 'sports',
    language: 'fr',
    country: 'fr',
  },
  {
    id: 'les-echos',
    name: 'Les Echos',
    description:
      "Toute l'actualité économique, financière et boursière française et internationale sur Les Echos.fr",
    url: 'https://www.lesechos.fr',
    category: 'business',
    language: 'fr',
    country: 'fr',
  },
  {
    id: 'liberation',
    name: 'Libération',
    description:
      "Toute l'actualité en direct - photos et vidéos avec Libération",
    url: 'http://www.liberation.fr',
    category: 'general',
    language: 'fr',
    country: 'fr',
  },
  {
    id: 'marca',
    name: 'Marca',
    description:
      'La mejor información deportiva en castellano actualizada minuto a minuto en noticias, vídeos, fotos, retransmisiones y resultados en directo.',
    url: 'http://www.marca.com',
    category: 'sports',
    language: 'es',
    country: 'es',
  },
  {
    id: 'mashable',
    name: 'Mashable',
    description:
      'Mashable is a global, multi-platform media and entertainment company.',
    url: 'https://mashable.com',
    category: 'entertainment',
    language: 'en',
    country: 'us',
  },
  {
    id: 'medical-news-today',
    name: 'Medical News Today',
    description:
      'Medical news and health news headlines posted throughout the day, every day.',
    url: 'http://www.medicalnewstoday.com',
    category: 'health',
    language: 'en',
    country: 'us',
  },
  {
    id: 'msnbc',
    name: 'MSNBC',
    description:
      'Breaking news and in-depth analysis of the headlines, as well as commentary and informed perspectives from The Rachel Maddow Show, Morning Joe & more.',
    url: 'http://www.msnbc.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'mtv-news',
    name: 'MTV News',
    description:
      "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
    url: 'http://www.mtv.com/news',
    category: 'entertainment',
    language: 'en',
    country: 'us',
  },
  {
    id: 'mtv-news-uk',
    name: 'MTV News (UK)',
    description:
      'All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.',
    url: 'http://www.mtv.co.uk/news',
    category: 'entertainment',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'national-geographic',
    name: 'National Geographic',
    description:
      'Reporting our world daily: original nature and science news from National Geographic.',
    url: 'http://news.nationalgeographic.com',
    category: 'science',
    language: 'en',
    country: 'us',
  },
  {
    id: 'national-review',
    name: 'National Review',
    description:
      'National Review: Conservative News, Opinion, Politics, Policy, & Current Events.',
    url: 'https://www.nationalreview.com/',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'nbc-news',
    name: 'NBC News',
    description:
      'Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.',
    url: 'http://www.nbcnews.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'news24',
    name: 'News24',
    description:
      "South Africa's premier news source, provides breaking news on national, world, Africa, sport, entertainment, technology and more.",
    url: 'http://www.news24.com',
    category: 'general',
    language: 'en',
    country: 'za',
  },
  {
    id: 'new-scientist',
    name: 'New Scientist',
    description:
      'Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.',
    url: 'https://www.newscientist.com/section/news',
    category: 'science',
    language: 'en',
    country: 'us',
  },
  {
    id: 'news-com-au',
    name: 'News.com.au',
    description:
      'We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.',
    url: 'http://www.news.com.au',
    category: 'general',
    language: 'en',
    country: 'au',
  },
  {
    id: 'newsweek',
    name: 'Newsweek',
    description:
      'Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.',
    url: 'https://www.newsweek.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'new-york-magazine',
    name: 'New York Magazine',
    description:
      'NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.',
    url: 'http://nymag.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'next-big-future',
    name: 'Next Big Future',
    description:
      'Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.',
    url: 'https://www.nextbigfuture.com',
    category: 'science',
    language: 'en',
    country: 'us',
  },
  {
    id: 'nfl-news',
    name: 'NFL News',
    description:
      'The official source for NFL news, schedules, stats, scores and more.',
    url: 'http://www.nfl.com/news',
    category: 'sports',
    language: 'en',
    country: 'us',
  },
  {
    id: 'nhl-news',
    name: 'NHL News',
    description:
      'The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.',
    url: 'https://www.nhl.com/news',
    category: 'sports',
    language: 'en',
    country: 'us',
  },
  {
    id: 'nrk',
    name: 'NRK',
    description:
      'NRK er Norges største tilbud på nett: nyheter fra Norge og verden, lokalnyheter, radio- og tv-program, podcast, vær, helse-, kultur-, underholdning-, humor- og debattstoff.',
    url: 'https://www.nrk.no',
    category: 'general',
    language: 'no',
    country: 'no',
  },
  {
    id: 'politico',
    name: 'Politico',
    description:
      'Political news about Congress, the White House, campaigns, lobbyists and issues.',
    url: 'https://www.politico.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'polygon',
    name: 'Polygon',
    description:
      'Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.',
    url: 'http://www.polygon.com',
    category: 'entertainment',
    language: 'en',
    country: 'us',
  },
  {
    id: 'rbc',
    name: 'RBC',
    description:
      'Главные новости политики, экономики и бизнеса, комментарии аналитиков, финансовые данные с российских и мировых биржевых систем на сайте rbc.ru.',
    url: 'https://www.rbc.ru',
    category: 'general',
    language: 'ru',
    country: 'ru',
  },
  {
    id: 'recode',
    name: 'Recode',
    description:
      'Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.',
    url: 'http://www.recode.net',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'reddit-r-all',
    name: 'Reddit /r/all',
    description:
      "Reddit is an entertainment, social news networking service, and news website. Reddit's registered community members can submit content, such as text posts or direct links.",
    url: 'https://www.reddit.com/r/all',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'reuters',
    name: 'Reuters',
    description:
      'Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.',
    url: 'http://www.reuters.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'rt',
    name: 'RT',
    description:
      'Актуальная картина дня на RT: круглосуточное ежедневное обновление новостей политики, бизнеса, финансов, спорта, науки, культуры. Онлайн-репортажи с места событий. Комментарии экспертов, актуальные интервью, фото и видео репортажи.',
    url: 'https://russian.rt.com',
    category: 'general',
    language: 'ru',
    country: 'ru',
  },
  {
    id: 'rte',
    name: 'RTE',
    description:
      "Get all of the latest breaking local and international news stories as they happen, with up to the minute updates and analysis, from Ireland's National Broadcaster.",
    url: 'https://www.rte.ie/news',
    category: 'general',
    language: 'en',
    country: 'ie',
  },
  {
    id: 'rtl-nieuws',
    name: 'RTL Nieuws',
    description:
      'Volg het nieuws terwijl het gebeurt. RTL Nieuws informeert haar lezers op een onafhankelijke, boeiende en toegankelijke wijze over belangrijke ontwikkelingen in eigen land en de rest van de wereld.',
    url: 'https://www.rtlnieuws.nl/',
    category: 'general',
    language: 'nl',
    country: 'nl',
  },
  {
    id: 'sabq',
    name: 'SABQ',
    description:
      'صحيفة الكترونية سعودية هدفها السبق في نقل الحدث بمهنية ومصداقية خدمة للوطن والمواطن.',
    url: 'https://sabq.org',
    category: 'general',
    language: 'ar',
    country: 'sa',
  },
  {
    id: 'spiegel-online',
    name: 'Spiegel Online',
    description:
      'Deutschlands führende Nachrichtenseite. Alles Wichtige aus Politik, Wirtschaft, Sport, Kultur, Wissenschaft, Technik und mehr.',
    url: 'http://www.spiegel.de',
    category: 'general',
    language: 'de',
    country: 'de',
  },
  {
    id: 'svenska-dagbladet',
    name: 'Svenska Dagbladet',
    description:
      'Sveriges ledande mediesajt - SvD.se. Svenska Dagbladets nyhetssajt låter läsarna ta plats och fördjupar nyheterna.',
    url: 'https://www.svd.se',
    category: 'general',
    language: 'sv',
    country: 'se',
  },
  {
    id: 't3n',
    name: 'T3n',
    description:
      'Das Online-Magazin bietet Artikel zu den Themen E-Business, Social Media, Startups und Webdesign.',
    url: 'https://t3n.de',
    category: 'technology',
    language: 'de',
    country: 'de',
  },
  {
    id: 'talksport',
    name: 'TalkSport',
    description:
      "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
    url: 'http://talksport.com',
    category: 'sports',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'techcrunch',
    name: 'TechCrunch',
    description:
      'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
    url: 'https://techcrunch.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'techcrunch-cn',
    name: 'TechCrunch (CN)',
    description:
      'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
    url: 'https://techcrunch.cn',
    category: 'technology',
    language: 'zh',
    country: 'zh',
  },
  {
    id: 'techradar',
    name: 'TechRadar',
    description:
      'The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.',
    url: 'http://www.techradar.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'the-american-conservative',
    name: 'The American Conservative',
    description:
      'Realism and reform. A new voice for a new generation of conservatives.',
    url: 'http://www.theamericanconservative.com/',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'the-globe-and-mail',
    name: 'The Globe And Mail',
    description:
      'The Globe and Mail offers the most authoritative news in Canada, featuring national and international news.',
    url: 'https://www.theglobeandmail.com',
    category: 'general',
    language: 'en',
    country: 'ca',
  },
  {
    id: 'the-hill',
    name: 'The Hill',
    description:
      'The Hill is a top US political website, read by the White House and more lawmakers than any other site -- vital for policy, politics and election campaigns.',
    url: 'http://thehill.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'the-hindu',
    name: 'The Hindu',
    description:
      "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
    url: 'http://www.thehindu.com',
    category: 'general',
    language: 'en',
    country: 'in',
  },
  {
    id: 'the-huffington-post',
    name: 'The Huffington Post',
    description:
      'The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.',
    url: 'http://www.huffingtonpost.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'the-irish-times',
    name: 'The Irish Times',
    description:
      'The Irish Times online. Latest news including sport, analysis, business, weather and more from the definitive brand of quality news in Ireland.',
    url: 'https://www.irishtimes.com',
    category: 'general',
    language: 'en',
    country: 'ie',
  },
  {
    id: 'the-jerusalem-post',
    name: 'The Jerusalem Post',
    description:
      'The Jerusalem Post is the leading online newspaper for English speaking Jewry since 1932, bringing news and updates from the Middle East and all over the Jewish world.',
    url: 'https://www.jpost.com/',
    category: 'general',
    language: 'en',
    country: 'is',
  },
  {
    id: 'the-lad-bible',
    name: 'The Lad Bible',
    description:
      'The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!',
    url: 'https://www.theladbible.com',
    category: 'entertainment',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'the-next-web',
    name: 'The Next Web',
    description:
      'The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.',
    url: 'http://thenextweb.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'the-sport-bible',
    name: 'The Sport Bible',
    description:
      'TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!',
    url: 'https://www.thesportbible.com',
    category: 'sports',
    language: 'en',
    country: 'gb',
  },
  {
    id: 'the-times-of-india',
    name: 'The Times of India',
    description:
      'Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.',
    url: 'http://timesofindia.indiatimes.com',
    category: 'general',
    language: 'en',
    country: 'in',
  },
  {
    id: 'the-verge',
    name: 'The Verge',
    description:
      'The Verge covers the intersection of technology, science, art, and culture.',
    url: 'http://www.theverge.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'the-wall-street-journal',
    name: 'The Wall Street Journal',
    description:
      'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.',
    url: 'http://www.wsj.com',
    category: 'business',
    language: 'en',
    country: 'us',
  },
  {
    id: 'the-washington-post',
    name: 'The Washington Post',
    description:
      'Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.',
    url: 'https://www.washingtonpost.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'the-washington-times',
    name: 'The Washington Times',
    description:
      'The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.',
    url: 'https://www.washingtontimes.com/',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'time',
    name: 'Time',
    description:
      'Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.',
    url: 'http://time.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'usa-today',
    name: 'USA Today',
    description:
      'Get the latest national, international, and political news at USATODAY.com.',
    url: 'http://www.usatoday.com/news',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'vice-news',
    name: 'Vice News',
    description:
      'Vice News is Vice Media, Inc.\'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of "under - reported stories".',
    url: 'https://news.vice.com',
    category: 'general',
    language: 'en',
    country: 'us',
  },
  {
    id: 'wired',
    name: 'Wired',
    description:
      'Wired is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.',
    url: 'https://www.wired.com',
    category: 'technology',
    language: 'en',
    country: 'us',
  },
  {
    id: 'wired-de',
    name: 'Wired.de',
    description:
      'Wired reports on how emerging technologies affect culture, the economy and politics.',
    url: 'https://www.wired.de',
    category: 'technology',
    language: 'de',
    country: 'de',
  },
  {
    id: 'wirtschafts-woche',
    name: 'Wirtschafts Woche',
    description:
      'Das Online-Portal des führenden Wirtschaftsmagazins in Deutschland. Das Entscheidende zu Unternehmen, Finanzen, Erfolg und Technik.',
    url: 'http://www.wiwo.de',
    category: 'business',
    language: 'de',
    country: 'de',
  },
  {
    id: 'xinhua-net',
    name: 'Xinhua Net',
    description:
      '中国主要重点新闻网站,依托新华社遍布全球的采编网络,记者遍布世界100多个国家和地区,地方频道分布全国31个省市自治区,每天24小时同时使用6种语言滚动发稿,权威、准确、及时播发国内外重要新闻和重大突发事件,受众覆盖200多个国家和地区,发展论坛是全球知名的中文论坛。',
    url: 'http://xinhuanet.com/',
    category: 'general',
    language: 'zh',
    country: 'zh',
  },
  {
    id: 'ynet',
    name: 'Ynet',
    description:
      'ynet דף הבית: אתר החדשות המוביל בישראל מבית ידיעות אחרונות. סיקור מלא של חדשות מישראל והעולם, ספורט, כלכלה, תרבות, אוכל, מדע וטבע, כל מה שקורה וכל מה שמעניין ב ynet.',
    url: 'http://www.ynet.co.il',
    category: 'general',
    language: 'he',
    country: 'is',
  },
] as Source[];
