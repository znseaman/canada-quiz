const rawQuestions = [
  {
    "id": 1,
    "question": "Who are the Aboriginal peoples of Canada?",
    "options": [
      "The first European settlers to arrive in Canada",
      "The descendents of the first Australian immigrants to Canada",
      "The first people to live in Canada",
      "The first settlers of Newfoundland"
    ],
    "answer": "The first people to live in Canada"
  },
  {
    "id": 2,
    "question": "What are the three main groups of Aboriginal peoples?",
    "options": [
      "First Nations, Métis and Inuit",
      "Acadians, Métis and Inuit",
      "United Empire Loyalists, Métis and Inuit",
      "Inuit, Métis and Acadians"
    ],
    "answer": "First Nations, Métis and Inuit"
  },
  {
    "id": 3,
    "question": "Who are the Métis?",
    "options": [
      "The distinct aboriginal people of Atlantic Canada",
      "A people of mixed Inuit/First Nations ancestry most of whom live on the Prairies",
      "First Nations people speaking the Michif dialect",
      "A distinct people of mixed Aboriginal and European ancestry"
    ],
    "answer": "A distinct people of mixed Aboriginal and European ancestry"
  },
  {
    "id": 4,
    "question": "Who were the United Empire Loyalists?",
    "options": [
      "Settlers who came to Canada from the United States during the American Revolution",
      "Aboriginal peoples",
      "Métis",
      "Inuit"
    ],
    "answer": "Settlers who came to Canada from the United States during the American Revolution"
  },
  {
    "id": 5,
    "question": "What does Confederation mean?",
    "options": [
      "The United States Confederate soldiers came to Canada",
      "Joining of communities to become a province",
      "Joining of suburbs to form a large city",
      "Joining of provinces to make a new country"
    ],
    "answer": "Joining of provinces to make a new country"
  },
  {
    "id": 6,
    "question": "What is the name of the Royal Anthem of Canada?",
    "options": [
      "O Canada",
      "God Save the Queen (or King)",
      "La Marseillaise",
      "The Star-Spangled Banner"
    ],
    "answer": "God Save the Queen (or King)"
  },
  {
    "id": 7,
    "question": "What year was Confederation?",
    "options": [
      "1867",
      "1871",
      "1898",
      "1864"
    ],
    "answer": "1867"
  },
  {
    "id": 8,
    "question": "When did the British North America Act come into effect?",
    "options": [
      "1871",
      "1898",
      "1867",
      "1905"
    ],
    "answer": "1867"
  },
  {
    "id": 9,
    "question": "Which province was split into two at Confederation? ",
    "options": [
      "Lower Canada",
      "Newfoundland",
      "Upper Canada",
      "The Province of Canada"
    ],
    "answer": "The Province of Canada"
  },
  {
    "id": 10,
    "question": "Which was the last province to join Canada?",
    "options": [
      "Newfoundland",
      "Alberta",
      "Saskatchewan",
      "British Columbia"
    ],
    "answer": "Newfoundland"
  },
  {
    "id": 11,
    "question": "When is Canada Day and what does it celebrate?",
    "options": [
      "June 15 of each year to celebrate the anniversary of Confederation",
      "August 8th of each year to celebrate the joining of British Columbia to Confederation",
      "We celebrate the anniversary of Confederation July 1st of each year",
      "May 21st of each year to remember Queen Victoria"
    ],
    "answer": "We celebrate the anniversary of Confederation July 1st of each year"
  },
  {
    "id": 12,
    "question": "Who was the first Prime Minister of Canada?",
    "options": [
      "Louis Riel",
      "Sir John A. Macdonald",
      "Lester B. Pearson",
      "Abraham Lincoln"
    ],
    "answer": "Sir John A. Macdonald"
  },
  {
    "id": 13,
    "question": "What part of the Constitution legally protects the basic rights and freedoms of all Canadians?",
    "options": [
      "The British Charter of Rights and Freedoms",
      "The Canadian Charter of Rights",
      "The Canadian Charter of Freedoms",
      "The Canadian Charter of Rights and Freedoms"
    ],
    "answer": "The Canadian Charter of Rights and Freedoms"
  },
  {
    "id": 14,
    "question": "When did the Canadian Charter of Rights and Freedoms become part of the Canadian Constitution?",
    "options": [
      "1867",
      "1905",
      "1982",
      "1878"
    ],
    "answer": "1982"
  },
  {
    "id": 15,
    "question": "Name two fundamental freedoms protected by the Canadian Charter of Rights and Freedoms",
    "options": [
      "Freedom of conscience and religion, and Freedom of association",
      "Equality rights, and to care for Canada's heritage",
      "Basic freedoms, and obeying laws",
      "Aboriginal peoples' rights, and to volunteer"
    ],
    "answer": "Freedom of conscience and religion, and Freedom of association"
  },
  {
    "id": 16,
    "question": "Name three additional rights protected by the Canadian Charter of Rights and Freedoms",
    "options": [
      "Freedom of speech, Right to own land, and Right to a fair trial",
      "Mobility rights, Multiculturalism, and Aboriginal Peoples' rights",
      "Right to ski anywhere in Canada, Moving rights, and Right to public assembly",
      "Right to vote, Right to speak publicly, and Security rights"
    ],
    "answer": "Mobility rights, Multiculturalism, and Aboriginal Peoples' rights"
  },
  {
    "id": 17,
    "question": "What is the meaning of the Remembrance Day poppy?",
    "options": [
      "To remember our Sovereign, Queen Elizabeth II",
      "To celebrate Confederation",
      "To honour Prime Ministers who have died",
      "To remember the sacrifice of Canadians who have served or died in wars up to the present day"
    ],
    "answer": "To remember the sacrifice of Canadians who have served or died in wars up to the present day"
  },
  {
    "id": 18,
    "question": "Who were the Voyagers?",
    "options": [
      "Montreal-based traders who travelled by canoe",
      "Immigrants to Canada in the 18th Century",
      "Explorers searching for the North-West Passage",
      "Geographers who first charted the coastline of British Columbia"
    ],
    "answer": "Montreal-based traders who travelled by canoe"
  },
  {
    "id": 19,
    "question": "Name six responsibilities of citizenship",
    "options": [
      "Getting a job, making money, raising a family, paying taxes, mowing your lawn, voting in provincial elections",
      "Voting in municipal elections only, joining a political party, getting a job, obeying the law, driving safely, picking up litter",
      "Caring for the environment, not littering, paying taxes, obeying the law, helping others, respecting others",
      "Obeying the law, taking responsibility for oneself and one's family, helping others in the community, voting in elections, serving on a jury, protecting and enjoying our heritage and environment"
    ],
    "answer": "Obeying the law, taking responsibility for oneself and one's family, helping others in the community, voting in elections, serving on a jury, protecting and enjoying our heritage and environment"
  },
  {
    "id": 20,
    "question": "Give an example of how you can show responsibility by participating in your community",
    "options": [
      "Mind your own business",
      "Have a party",
      "Keep your property tidy",
      "Volunteer"
    ],
    "answer": "Volunteer"
  },
  {
    "id": 21,
    "question": "What happened at the Battle of the Plains of Abraham?",
    "options": [
      "The Voyagers battled with the British for fur trading rights",
      "Americans fought the United Empire Loyalists during the American Revolution",
      "The British defeated the French marking the end of France's empire in America",
      "The French defeated the British in a battle for Quebec"
    ],
    "answer": "The British defeated the French marking the end of France's empire in America"
  },
  {
    "id": 22,
    "question": "What will you promise when you take the Oath of Citizenship?",
    "options": [
      "Pledge allegiance to the Queen, observe the laws of Canada and fulfil the duties of a Canadian",
      "Pledge to be faithful to the Queen",
      "Promise to observe the laws of Canada",
      "Fulfil duties as a Canadian citizen"
    ],
    "answer": "Pledge allegiance to the Queen, observe the laws of Canada and fulfil the duties of a Canadian"
  },
  {
    "id": 23,
    "question": "What are the two official languages of Canada?",
    "options": [
      "English and Métis",
      "Inuktitut and French",
      "English and French",
      "English and Inuktitut"
    ],
    "answer": "English and French"
  },
  {
    "id": 24,
    "question": "Give an example of where English and French have equal status in Canada",
    "options": [
      "In schools",
      "In the workplace",
      "In the Parliament of Canada",
      "At City Hall"
    ],
    "answer": "In the Parliament of Canada"
  },
  {
    "id": 25,
    "question": "Where do most French-speaking Canadians live?",
    "options": [
      "Ontario",
      "Nova Scotia",
      "Quebec",
      "Prince Edward Island"
    ],
    "answer": "Quebec"
  },
  {
    "id": 26,
    "question": "In Canada's justice system what does \"presumption of innocence\" mean?",
    "options": [
      "Everyone is guilty until proven innocent",
      "Guilt is decided by public opinion",
      "Innocence is decided by public opinion",
      "Everyone is innocent until proven guilty"
    ],
    "answer": "Everyone is innocent until proven guilty"
  },
  {
    "id": 27,
    "question": "Which province is the only officially bilingual province?",
    "options": [
      "New Brunswick",
      "Quebec",
      "Ontario",
      "Prince Edward Island"
    ],
    "answer": "New Brunswick"
  },
  {
    "id": 28,
    "question": "What does the Canadian flag look like?",
    "options": [
      "Red and white with provincial emblems",
      "Red and white with a beaver",
      "White with a red border on each end and a red maple leaf in the centre",
      "Red with a white maple leaf"
    ],
    "answer": "White with a red border on each end and a red maple leaf in the centre"
  },
  {
    "id": 29,
    "question": "What song is Canada's national anthem?",
    "options": [
      "God Save the Queen",
      "O Canada",
      "Star Spangled Banner",
      "Amazing Grace"
    ],
    "answer": "O Canada"
  },
  {
    "id": 30,
    "question": "Give the first line of Canada's national anthem?",
    "options": [
      "O Canada!  Our home and native land!",
      "O Canada!  Our province and native land!",
      "O Canada!  From far and wide, O Canada, We stand on guard for thee",
      "O Canada!  We stand on guard for thee"
    ],
    "answer": "O Canada!  Our home and native land!"
  },
  {
    "id": 31,
    "question": "From where does the name \"Canada\" come from?",
    "options": [
      "From the Inuit word meaning country",
      "From the French word meaning joining",
      "From the Métis word meaning rivers",
      "From \"Kanata\", the Huron-Iroquois word for village"
    ],
    "answer": "From \"Kanata\", the Huron-Iroquois word for village"
  },
  {
    "id": 32,
    "question": "Which animal is an official symbol of Canada?",
    "options": [
      "The moose",
      "The hawk",
      "The beaver",
      "The deer"
    ],
    "answer": "The beaver"
  },
  {
    "id": 33,
    "question": "What three oceans border Canada?",
    "options": [
      "Atlantic, Arctic and Bering",
      "Atlantic, Arctic and Pacific",
      "Pacific, Indian and Atlantic",
      "Hudson, Pacific and Atlantic"
    ],
    "answer": "Atlantic, Arctic and Pacific"
  },
  {
    "id": 34,
    "question": "What is the capital city of Canada?",
    "options": [
      "Ottawa",
      "Toronto",
      "Montreal",
      "Hull"
    ],
    "answer": "Ottawa"
  },
  {
    "id": 35,
    "question": "What are the provinces of Central Canada and their capital cities?",
    "options": [
      "Manitoba (Winnipeg) and Ontario (Toronto)",
      "Quebec (Quebec City) and Prince Edward Island (Charlottetown)",
      "Ontario (Toronto) and Quebec (Quebec City)",
      "Saskatchewan (Regina) and Manitoba Winnipeg)"
    ],
    "answer": "Ontario (Toronto) and Quebec (Quebec City)"
  },
  {
    "id": 36,
    "question": "What is Canada's system of government called?",
    "options": [
      "Dictatorship",
      "Parliamentary government",
      "Military Rule",
      "Communism"
    ],
    "answer": "Parliamentary government"
  },
  {
    "id": 37,
    "question": "What are the provinces of the Atlantic region and their capital cities?",
    "options": [
      "Nova Scotia (Halifax), New Brunswick (Fredericton), Prince Edward Island (Charlottetown) and Quebec (Quebec)",
      "Newfoundland and Labrador (St. John's), Nova Scotia (Halifax), New Brunswick (Fredericton) and Prince Edward Island (Charlottetown)",
      "Newfoundland and Labrador (St. John's), Nova Scotia (Halifax), New Brunswick (Fredericton) and Quebec (Quebec)",
      "Nova Scotia (Halifax), New Brunswick (Fredericton), Quebec (Quebec City)and Ontario (Toronto)"
    ],
    "answer": "Newfoundland and Labrador (St. John's), Nova Scotia (Halifax), New Brunswick (Fredericton) and Prince Edward Island (Charlottetown)"
  },
  {
    "id": 38,
    "question": "What are the Prairie provinces and their capital cities?",
    "options": [
      "Alberta (Edmonton) and Saskatchewan (Regina)",
      "Alberta (Edmonton), Saskatchewan (Regina) and Manitoba (Winnipeg)",
      "Saskatchewan (Regina) and Manitoba (Winnipeg)",
      "Saskatchewan (Regina), Manitoba (Winnipeg) and Ontario (Toronto)"
    ],
    "answer": "Alberta (Edmonton), Saskatchewan (Regina) and Manitoba (Winnipeg)"
  },
  {
    "id": 39,
    "question": "What are the territories of Northern Canada and their capital cities?",
    "options": [
      "Alaska (Juneau) and Yukon Territory ( Whitehorse)",
      "Northwest Territories (Yellowknife) and Alaska (Juneau)",
      "Northwest Territories (Yellowknife)",
      "Yukon Territory (Whitehorse), Northwest Territories (Yellowknife), and Nunavut (Iqaluit)"
    ],
    "answer": "Yukon Territory (Whitehorse), Northwest Territories (Yellowknife), and Nunavut (Iqaluit)"
  },
  {
    "id": 40,
    "question": "Name the five regions of Canada",
    "options": [
      "Midwest, North, South, East, Central",
      "Maritimes, Ontario, Quebec, Prairies, and British Columbia",
      "Atlantic, Central, Prairie, West Coast, and North",
      "West, Central, East, Prairies, and Territories"
    ],
    "answer": "Atlantic, Central, Prairie, West Coast, and North"
  },
  {
    "id": 41,
    "question": "Which region covers more than one-third of Canada?",
    "options": [
      "Central Canada",
      "Prairies",
      "Atlantic Canada",
      "Northern Territories"
    ],
    "answer": "Northern Territories"
  },
  {
    "id": 42,
    "question": "In which region do more than half the people in Canada live?",
    "options": [
      "Central Canada",
      "Prairies",
      "Atlantic Canada",
      "Northern Canada"
    ],
    "answer": "Central Canada"
  },
  {
    "id": 43,
    "question": "One third of all Canadians live in which province?",
    "options": [
      "Quebec",
      "Ontario",
      "Northwest Territories",
      "Manitoba"
    ],
    "answer": "Ontario"
  },
  {
    "id": 44,
    "question": "Where are the Great Lakes?",
    "options": [
      "Between Ontario and the United States",
      "Manitoba",
      "Northern Quebec",
      "Atlantic Canada"
    ],
    "answer": "Between Ontario and the United States"
  },
  {
    "id": 45,
    "question": "Where are the Parliament Buildings located?",
    "options": [
      "Ottawa",
      "Quebec City",
      "Hull",
      "Toronto"
    ],
    "answer": "Ottawa"
  },
  {
    "id": 46,
    "question": "Which country borders Canada on the south?",
    "options": [
      "United States of America",
      "Central America",
      "Mexico",
      "Washington"
    ],
    "answer": "United States of America"
  },
  {
    "id": 47,
    "question": "Which province in Canada is the smallest in land size?",
    "options": [
      "Nova Scotia",
      "Prince Edward Island",
      "Yukon Territory",
      "Newfoundland and Labrador"
    ],
    "answer": "Prince Edward Island"
  },
  {
    "id": 48,
    "question": "What is a major river in Quebec?",
    "options": [
      "Fraser River",
      "St. Lawrence River",
      "Niagara",
      "Hudson's Bay"
    ],
    "answer": "St. Lawrence River"
  },
  {
    "id": 49,
    "question": "On what date did Nunavut become a territory?",
    "options": [
      "July 1st, 1867",
      "April 1st, 1999",
      "June 24th, 1995",
      "March 31st, 1949"
    ],
    "answer": "April 1st, 1999"
  },
  {
    "id": 50,
    "question": "What are the three main types of industry in Canada?",
    "options": [
      "Natural resources, tourism and service industries.",
      "Tourism, services and manufacturing",
      "Natural resources, tourism and manufacturing",
      "Natural resources, manufacturing and services"
    ],
    "answer": "Natural resources, manufacturing and services"
  },
  {
    "id": 51,
    "question": "In what industry do most Canadians work?",
    "options": [
      "Natural resources",
      "Tourism",
      "Service",
      "Manufacturing"
    ],
    "answer": "Service"
  },
  {
    "id": 52,
    "question": "What country is Canada's largest trading partner?",
    "options": [
      "Mexico",
      "United States of America",
      "China",
      "Japan"
    ],
    "answer": "United States of America"
  },
  {
    "id": 53,
    "question": "Which region is known as the industrial and manufacturing heartland of Canada?",
    "options": [
      "Atlantic provinces",
      "Prairie provinces",
      "Central Canada",
      "West Coast"
    ],
    "answer": "Central Canada"
  },
  {
    "id": 54,
    "question": "Which region of Canada is known for both its fertile agricultural land and valuable energy resources?",
    "options": [
      "British Columbia",
      "Prairie provinces",
      "Ontario",
      "Manitoba"
    ],
    "answer": "Prairie provinces"
  },
  {
    "id": 55,
    "question": "Who is Canada's Head of State?",
    "options": [
      "Governor General of Canada",
      "Her Majesty Queen Elizabeth II",
      "Prime Minister",
      "Lieutenant Governor"
    ],
    "answer": "Her Majesty Queen Elizabeth II"
  },
  {
    "id": 56,
    "question": "Who is the Queen's representative in Canada?",
    "options": [
      "Prime Minister of Canada",
      "Premier",
      "Her Majesty Queen Elizabeth II",
      "Governor General of Canada"
    ],
    "answer": "Governor General of Canada"
  },
  {
    "id": 57,
    "question": "What is the name of the Governor General?",
    "options": [
      "David Johnston",
      "Elizabeth May",
      "Dalton McGuinty",
      "Julie Payette"
    ],
    "answer": "Julie Payette"
  },
  {
    "id": 58,
    "question": "What do you call the Sovereign's representative in the provinces?",
    "options": [
      "Premier",
      "Member of the Legislative Assembly",
      "Lieutenant-Governor",
      "Senator"
    ],
    "answer": "Lieutenant-Governor"
  },
  {
    "id": 59,
    "question": "What are the three parts of Parliament?",
    "options": [
      "The Sovereign, Governor General and Prime Minister",
      "The House of Commons, the Legislative Assembly and the Senate",
      "The Queen, the Legislative Assembly and the Senate",
      "The Sovereign, the House of Commons and the Senate"
    ],
    "answer": "The Sovereign, the House of Commons and the Senate"
  },
  {
    "id": 60,
    "question": "What do you call a law before it is passed?",
    "options": [
      "A New law",
      "A Proposed law",
      "A Bill",
      "A New proposal"
    ],
    "answer": "A Bill"
  },
  {
    "id": 61,
    "question": "How are Members of Parliament chosen?",
    "options": [
      "Appointed by the Prime Minister",
      "Elected by Canadian citizens",
      "Appointed by the Queen",
      "Elected by the Provincial Ministers"
    ],
    "answer": "Elected by Canadian citizens"
  },
  {
    "id": 62,
    "question": "Who do Members of Parliament represent?",
    "options": [
      "All of the Canadians living in the north",
      "Only Canadians living in Central Canada",
      "Everyone who lives in his or her electoral district",
      "Canadians living in the province in which he/she was elected"
    ],
    "answer": "Everyone who lives in his or her electoral district"
  },
  {
    "id": 63,
    "question": "How does a bill become a law?",
    "options": [
      "The Lieutenant Governor must approve the bill",
      "Approval by a majority in the House of Commons and Senate and finally the Governor General",
      "The Queen must sign the bill",
      "Approval by the Members of the Legislative Assembly"
    ],
    "answer": "Approval by a majority in the House of Commons and Senate and finally the Governor General"
  },
  {
    "id": 64,
    "question": "What are the three levels of government in Canada?",
    "options": [
      "Federal, Provincial and Territorial, Municipal (local)",
      "Federal, Provincial and City",
      "Federal, Territorial and Provincial",
      "Federal, State and Local"
    ],
    "answer": "Federal, Provincial and Territorial, Municipal (local)"
  },
  {
    "id": 65,
    "question": "Name two responsibilities of the federal government",
    "options": [
      "National defence and firefighting",
      "National defence and foreign policy",
      "Citizenship and highways",
      "Recycling and education"
    ],
    "answer": "National defence and foreign policy"
  },
  {
    "id": 66,
    "question": "What is the government of all of Canada called?",
    "options": [
      "National assembly",
      "Legislature",
      "Federal",
      "Council"
    ],
    "answer": "Federal"
  },
  {
    "id": 67,
    "question": "Who has the right to vote in federal elections?",
    "options": [
      "A Canadian citizen, 18 years or older, and on voters' list",
      "A Canadian citizen, 18 years or older and must work for the federal government",
      "A landed immigrant, 18 years old and a memberof the Canadian Forces",
      "A Canadian citizen, over 25 years and a member of the Canadian Forces"
    ],
    "answer": "A Canadian citizen, 18 years or older, and on voters' list"
  },
  {
    "id": 68,
    "question": "What did the Fathers of Confederation do? ",
    "options": [
      "They worked together to establish a new country, the Dominion of Canada",
      "They were explorers who formed an expedition to survey Northern Canada",
      "They formed a republic state in Canada",
      "They were a group of politicians that tried to unite Canada to the United States"
    ],
    "answer": "They worked together to establish a new country, the Dominion of Canada"
  },
  {
    "id": 69,
    "question": "When asked, who must you tell how you voted in a federal election?",
    "options": [
      "Your employer",
      "No one",
      "A police officer",
      "An Elections Canada official"
    ],
    "answer": "No one"
  },
  {
    "id": 70,
    "question": "What do you mark on a federal election ballot?",
    "options": [
      "The candidate's name",
      "The number for the candidate",
      "An \"X\"",
      "The voter's name"
    ],
    "answer": "An \"X\""
  },
  {
    "id": 71,
    "question": "How is the government formed after a federal election?",
    "options": [
      "The party with the most elected representatives becomes the party in power. The Queen chooses the Prime Minister from this party",
      "Ordinarily, the party with the most elected representatives becomes the party in power. The leader of this party becomes the Prime Minister",
      "The Governor General picks a party and a President to run the government",
      "Each province elects one representative to form the government. The Queen then chooses the Prime Minister"
    ],
    "answer": "Ordinarily, the party with the most elected representatives becomes the party in power. The leader of this party becomes the Prime Minister"
  },
  {
    "id": 72,
    "question": "How is the Prime Minister chosen?",
    "options": [
      "The Queen appoints the Prime Minister",
      "The Governor General with the Senate appoint the Prime Minister",
      "The leader of the party with the most elected representatives becomes the Prime Minister",
      "The MPs vote on the Prime Minister"
    ],
    "answer": "The leader of the party with the most elected representatives becomes the Prime Minister"
  },
  {
    "id": 73,
    "question": "When must federal elections be held?",
    "options": [
      "About every 4 years",
      "On the third Monday in October every four years following the most recent general election",
      "Whenever the Prime Minister calls the election",
      "When the MPs want a new Prime Minister"
    ],
    "answer": "On the third Monday in October every four years following the most recent general election"
  },
  {
    "id": 74,
    "question": "Name all the federal political parties in the House of Commons and their leaders",
    "options": [
      "Conservative (Scheer), NDP (Singh), Liberal (Trudeau), Bloc Quebecois (Ouellet), Green Party (May)",
      "Conservative (Harper), Green (May), Liberal (Trudeau), Bloc Quebecois (Duceppe)",
      "NDP (Mulcair), Green (May), Liberal (Rae), Bloc Quebecois (Paillé)",
      "Liberal (Ignatieff), Conservative (Ambrose), NDP (Turmel), Green (May)"
    ],
    "answer": "Conservative (Scheer), NDP (Singh), Liberal (Trudeau), Bloc Quebecois (Ouellet), Green Party (May)"
  },
  {
    "id": 75,
    "question": "Which party becomes the Official Opposition?",
    "options": [
      "The party with the second most MPs",
      "The party receiving the least votes",
      "Any independent candidate",
      "The party the Prime Minister selects"
    ],
    "answer": "The party with the second most MPs"
  },
  {
    "id": 76,
    "question": "What is the role of the Opposition parties?",
    "options": [
      "To assist the Prime Minister",
      "To sign bills",
      "To oppose or try to improve government proposals",
      "To put forward bills to be passed"
    ],
    "answer": "To oppose or try to improve government proposals"
  },
  {
    "id": 77,
    "question": "Which party is the Official Opposition at the federal level?",
    "options": [
      "The New Democratic Party",
      "The Liberal Party",
      "The Independent Party",
      "The Conservative Party"
    ],
    "answer": "The Conservative Party"
  },
  {
    "id": 78,
    "question": "What is the name of the Prime Minister of Canada and his/her party?",
    "options": [
      "Justin Trudeau (Liberal Party)",
      "Stephen Harper (Conservative Party)",
      "Thomas Mulcair (New Democratic Party)",
      "Christie Clark (Liberal Party)"
    ],
    "answer": "Justin Trudeau (Liberal Party)"
  },
  {
    "id": 79,
    "question": "What is a voter information card?",
    "options": [
      "Tells you who the candidates are in your electoral district",
      "Tells you what province to vote in",
      "A form that tells you when and where to vote",
      "A form that lets you know your voting time"
    ],
    "answer": "A form that tells you when and where to vote"
  },
  {
    "id": 80,
    "question": "Who has the right to run as a candidate in federal elections?",
    "options": [
      "Anyone",
      "A Canadian citizen who is 16 years old",
      "Any man who is at least 18 years old",
      "Any Canadian citizen who is at least 18 years old"
    ],
    "answer": "Any Canadian citizen who is at least 18 years old"
  },
  {
    "id": 81,
    "question": "Who do Canadians vote for in a federal election?",
    "options": [
      "The best speaker running in the election",
      "A candidate they want to represent them in Parliament",
      "Someone to become the Premier",
      "All of the candidates in their electoral district"
    ],
    "answer": "A candidate they want to represent them in Parliament"
  },
  {
    "id": 82,
    "question": "Which federal political party is in power?",
    "options": [
      "Green Party",
      "New Democratic Party",
      "Liberal Party",
      "Conservative Party"
    ],
    "answer": "Liberal Party"
  },
  {
    "id": 83,
    "question": "How are Senators chosen?",
    "options": [
      "By the Governor General of Canada",
      "By the Premiers of all provinces",
      "Appointed by the Queen",
      "Senators are appointed by the Governor General on the advice of the Prime Minister"
    ],
    "answer": "Senators are appointed by the Governor General on the advice of the Prime Minister"
  },
  {
    "id": 84,
    "question": "What should you do if you do not receive a voter information card telling you when and where to vote?",
    "options": [
      "Go to the police station",
      "Call your Member of Parliament",
      "Assume you cannot vote",
      "Call Elections Canada or visit their website"
    ],
    "answer": "Call Elections Canada or visit their website"
  },
  {
    "id": 85,
    "question": "After a federal election, which party forms the new government?",
    "options": [
      "The party with the most elected representatives is invited by the Governor General to become the party in power",
      "The Queen herself picks any party to run the government",
      "The Governor General proposes a law for elected officials to become the governing body",
      "The Premiers of each province pick a party to run the government"
    ],
    "answer": "The party with the most elected representatives is invited by the Governor General to become the party in power"
  },
  {
    "id": 86,
    "question": "Which of the following statements about residential schools is NOT true?   ",
    "options": [
      "The federal government placed many Aboriginal children in residential schools to educate and assimilate them into mainstream Canadian culture",
      "The schools were poorly funded and inflicted hardship on the students",
      "The schools were welcomed by the Aboriginal people",
      "Aboriginal language and cultural practices were mostly prohibited"
    ],
    "answer": "The schools were welcomed by the Aboriginal people"
  },
  {
    "id": 87,
    "question": "Who are the Quebecers?     ",
    "options": [
      "European settlers in the 1600s",
      "Descendants of the French colonists",
      "Descendants of the Anglophones",
      "People of Quebec"
    ],
    "answer": "People of Quebec"
  },
  {
    "id": 88,
    "question": "Who are the Acadians? ",
    "options": [
      "Aboriginal people of the arctic",
      "French-speaking Catholics living in Ontario",
      "The descendants of French colonists who began settling in what are now the Maritime provinces in 1604",
      "English speaking refugees who settled in Louisiana"
    ],
    "answer": "The descendants of French colonists who began settling in what are now the Maritime provinces in 1604"
  },
  {
    "id": 89,
    "question": "What is the largest religious affiliation in Canada?",
    "options": [
      "Catholic",
      "Muslim",
      "Jewish",
      "Hindu"
    ],
    "answer": "Catholic"
  },
  {
    "id": 90,
    "question": "Which Act granted, for the first time in Canada, legislative assemblies elected by the people?",
    "options": [
      "The Constitutional Act of 1867",
      "The Constitutional Act of 1791",
      "The Constitutional Act of 1982",
      "The Constitutional Act of 2010"
    ],
    "answer": "The Constitutional Act of 1791"
  },
  {
    "id": 91,
    "question": "Which of the following sentences best describes the War of 1812?",
    "options": [
      "Napoleon's fleet was defeated by the Royal Navy in the war",
      "The USA became independent from the British Empire after the war",
      "The USA invaded Canada and was defeated, which ensured that Canada would remain independent of the United States",
      "Canada joined the United States after the war"
    ],
    "answer": "The USA invaded Canada and was defeated, which ensured that Canada would remain independent of the United States"
  },
  {
    "id": 92,
    "question": "Who was the first leader of a responsible government in the Canadas in 1849?",
    "options": [
      "Sir John A. Macdonald",
      "Robert Baldwin",
      "Louis Riel",
      "Sir Louis-Hippolyte La Fontaine"
    ],
    "answer": "Sir Louis-Hippolyte La Fontaine"
  },
  {
    "id": 93,
    "question": "Who was Sir Sam Steele?",
    "options": [
      "A great frontier hero, Mounted Policeman and soldier of the Queen",
      "A military leader of the Métis in the 19th century",
      "The first Prime Minister of Canada",
      "The Father of Manitoba"
    ],
    "answer": "A great frontier hero, Mounted Policeman and soldier of the Queen"
  },
  {
    "id": 94,
    "question": "Who had played an important part in building the Canadian Pacific Railway (CPR)?",
    "options": [
      "American railroad engineers",
      "Acadian railroad workers",
      "Chinese railroad workers",
      "African American slaves"
    ],
    "answer": "Chinese railroad workers"
  },
  {
    "id": 95,
    "question": "What is the \"head tax\"?",
    "options": [
      "Race-based entry fee charged for Chinese entering Canada",
      "Fee charged for anyone entering Canada after 1900",
      "A tax imposed on beer beginning in 1867",
      "Fee charged for moving westward in the early 1900s"
    ],
    "answer": "Race-based entry fee charged for Chinese entering Canada"
  },
  {
    "id": 96,
    "question": "Who is General Sir Arthur Currie?",
    "options": [
      "A military leader of the Métis in the 19th century",
      "A great frontier hero",
      "An explorer of western Canada",
      "Canada's greatest soldier in the First World War"
    ],
    "answer": "Canada's greatest soldier in the First World War"
  },
  {
    "id": 97,
    "question": "Approximately how many Canadians served in the First World War?",
    "options": [
      "7000",
      "8 million",
      "About 60,000",
      "More than 600,000"
    ],
    "answer": "More than 600,000"
  },
  {
    "id": 98,
    "question": "What was the Women's Suffrage Movement? ",
    "options": [
      "The effort by women to achieve the right to vote",
      "The effort by women to participate in military service",
      "An unsuccessful movement to get husbands to do housework",
      "The effort by women to be in Parliament"
    ],
    "answer": "The effort by women to achieve the right to vote"
  },
  {
    "id": 99,
    "question": "When is Remembrance Day celebrated?",
    "options": [
      "July 1st",
      "October 1st",
      "November 11th",
      "December 25th"
    ],
    "answer": "November 11th"
  },
  {
    "id": 100,
    "question": "In the 1960s, Quebec experienced an era of rapid change. What is this called?",
    "options": [
      "The West Movement",
      "The Revolution",
      "The Quiet Revolution",
      "La Francophonie"
    ],
    "answer": "The Quiet Revolution"
  },
  {
    "id": 101,
    "question": "Which of the following is NOT a feature of Canada's system of government?",
    "options": [
      "A federal state",
      "Parliamentary democracy",
      "Constitutional Monarchy",
      "Dictatorship"
    ],
    "answer": "Dictatorship"
  },
  {
    "id": 102,
    "question": "Who have major responsibilities on First Nations reserves?",
    "options": [
      "Band chiefs and councillors",
      "Municipal governments",
      "Provincial and territorial governments",
      "Federal government"
    ],
    "answer": "Band chiefs and councillors"
  },
  {
    "id": 103,
    "question": "What is Canada's national winter sport?",
    "options": [
      "Golf",
      "Nordic skiing",
      "Lacrosse",
      "Hockey"
    ],
    "answer": "Hockey"
  },
  {
    "id": 104,
    "question": "What is meant by the equality of women and men? ",
    "options": [
      "Men and women are equal under the law",
      "Men and women must both do housework",
      "Women may now go to school and enter the professional workforce",
      "A woman may now become Prime Minister"
    ],
    "answer": "Men and women are equal under the law"
  },
  {
    "id": 105,
    "question": "Who are the founding peoples of Canada?",
    "options": [
      "Métis, French and British",
      "Aboriginal, Métis and British",
      "Inuit, Aboriginal and British",
      "Aboriginal, French and British"
    ],
    "answer": "Aboriginal, French and British"
  },
  {
    "id": 106,
    "question": "What does the word \"Inuit\" mean?",
    "options": [
      "\"Eskimo\" in Inuktitut language",
      "\"Home\" in English",
      "\"The people\" in the Inuktitut language",
      "\"The Arctic Land\" in Inuktitut language"
    ],
    "answer": "\"The people\" in the Inuktitut language"
  },
  {
    "id": 107,
    "question": "What percentage of Aboriginal people are First Nations? ",
    "options": [
      "30%",
      "6%",
      "50%",
      "65%"
    ],
    "answer": "65%"
  },
  {
    "id": 108,
    "question": "What did the Canadian Pacific Railway symbolize? ",
    "options": [
      "Easy access to the West Coast",
      "What can be achieved by working together",
      "Unity",
      "Ribbons of steel"
    ],
    "answer": "Unity"
  },
  {
    "id": 109,
    "question": "What does it mean to say Canada is a constitutional monarchy? ",
    "options": [
      "The Sovereign (Queen or King) is the law maker of Canada",
      "Canada's Head of State is a hereditary Sovereign (Queen or King) who reigns in accordance with the Constitution",
      "The Sovereign (Queen or King) represents Canadians in Parliament",
      "The Sovereign (Queen or King) approves bills before becoming law"
    ],
    "answer": "Canada's Head of State is a hereditary Sovereign (Queen or King) who reigns in accordance with the Constitution"
  },
  {
    "id": 110,
    "question": "What is the highest military honour a Canadian can receive? ",
    "options": [
      "Purple Cross",
      "Badge of Courage",
      "Order of Merit",
      "Victoria Cross"
    ],
    "answer": "Victoria Cross"
  },
  {
    "id": 111,
    "question": "Who is considered the father of Manitoba?",
    "options": [
      "John A. Macdonald",
      "Sam Steele",
      "Alfred Boyd",
      "Louis Riel"
    ],
    "answer": "Louis Riel"
  },
  {
    "id": 112,
    "question": "Who was Sir Louis-Hippolyte La Fontaine?",
    "options": [
      "A champion of democracy and Aboriginal rights",
      "A champion of democracy and French language rights and the first leader of a responsible government in the Canadas",
      "The first Head of State",
      "The first French speaking Prime Minister"
    ],
    "answer": "A champion of democracy and French language rights and the first leader of a responsible government in the Canadas"
  },
  {
    "id": 113,
    "question": "What does the term \"responsible government\" mean?",
    "options": [
      "Each person in each electoral district is responsible for voting",
      "The Governor General is responsible for the actions of the Prime Minister",
      "The ministers of the Crown must have the support of a majority of the elected representatives in order to govern",
      "All Canadians are responsible for each other"
    ],
    "answer": "The ministers of the Crown must have the support of a majority of the elected representatives in order to govern"
  },
  {
    "id": 114,
    "question": "In Canada, are you allowed to question the police about their service or conduct? ",
    "options": [
      "No, police service and conduct is not open to discussion with Canadians",
      "Yes, you can question their service but not their conduct",
      "Yes, you can question their conduct but not their service",
      "Yes, if you feel the need to"
    ],
    "answer": "Yes, if you feel the need to"
  },
  {
    "id": 115,
    "question": "What is the role of the courts in Canada?",
    "options": [
      "To enforce the law",
      "To guide people in our society",
      "To settle disputes",
      "To express values and beliefs of Canadians"
    ],
    "answer": "To settle disputes"
  },
  {
    "id": 116,
    "question": "When you vote on election day, what do you do? ",
    "options": [
      "Go to the voting station, tell them who you are and mark your X.  Give the ballot back to the attendant",
      "Go to the voting station, remove 1 ballot and after marking your X deposit it in the ballot box",
      "Go to the voting station, take your voter's card with proof if identity, highlight your choice on the ballot and deposit it in the box",
      "Go to the voting station with your voter's card and ID, mark an X next to your chosen candidate, fold the ballot and present it to the poll officials who will tear off the ballot number and give you the ballot to deposit in the box"
    ],
    "answer": "Go to the voting station with your voter's card and ID, mark an X next to your chosen candidate, fold the ballot and present it to the poll officials who will tear off the ballot number and give you the ballot to deposit in the box"
  },
  {
    "id": 117,
    "question": "Name two key documents that contain our rights and freedoms. ",
    "options": [
      "The Canadian Constitution and English common law",
      "Civil code of France and the Canadian Constitution",
      "Canadian Charter of Rights and Freedoms and Magna Carta (the Great Charter of Freedoms)",
      "Laws passed by Parliament and English common law"
    ],
    "answer": "Canadian Charter of Rights and Freedoms and Magna Carta (the Great Charter of Freedoms)"
  },
  {
    "id": 118,
    "question": "What is the difference between the role of the Sovereign and that of the Prime Minister?",
    "options": [
      "The Sovereign is Head of State, the Prime Minister oversees provincial policies",
      "The Sovereign is the guardian of Constitutional freedoms, the Prime Minister selects the Cabinet ministers and is responsible for operations and policy of government",
      "The Sovereign links Canada to 52 other nations and the Prime Minister is the guardian of Constitutional freedoms",
      "The Sovereign is the symbol of Canadian sovereignty and the Prime Minister is her aide"
    ],
    "answer": "The Sovereign is the guardian of Constitutional freedoms, the Prime Minister selects the Cabinet ministers and is responsible for operations and policy of government"
  },
  {
    "id": 119,
    "question": "What is the significance of the discovery of insulin by Sir Frederick Banting and Charles Best? ",
    "options": [
      "Insulin is a hormone that permits you to eat anything you wish",
      "Insulin has saved 16 million lives worldwide",
      "Discovering insulin opened the doors to more discoveries",
      "Discovering insulin made Drs. Banting and Best famous"
    ],
    "answer": "Insulin has saved 16 million lives worldwide"
  },
  {
    "id": 120,
    "question": "What are some examples of taking responsibility for yourself and your family? ",
    "options": [
      "Buying a house and a TV",
      "Getting a job, taking care of one's family and working hard in keeping with one's abilities",
      "Doing laundry and keeping the house clean",
      "Study hard so you can earn enough money to take a vacation"
    ],
    "answer": "Getting a job, taking care of one's family and working hard in keeping with one's abilities"
  },
  {
    "id": 121,
    "question": "Which three countries are signatories to NAFTA?",
    "options": [
      "Canada, the United Kingdom and the United States",
      "Canada, the United States and Japan",
      "Canada, Mexico and the United States",
      "Canada, Denmark and Andorra"
    ],
    "answer": "Canada, Mexico and the United States"
  },
  {
    "id": 122,
    "question": "What was the significance of June 6, 1944 invasion of Normandy?",
    "options": [
      "It led to the establishment of the Juno Awards",
      "It liberated North Africa from Nazi occupation",
      "Canadians made a significant contribution to the defeat of Nazism and Fascism in Europe during the Second World War",
      "It resulted in the forcible relocation of Canadians of Japanese origin"
    ],
    "answer": "Canadians made a significant contribution to the defeat of Nazism and Fascism in Europe during the Second World War"
  },
  {
    "id": 123,
    "question": "Fatima is a new immigrant in Canada.  What law allows her to take a job at par with a man?",
    "options": [
      "Equality of women and men",
      "Equality of all races",
      "Equal pay for equal work",
      "Equal rights"
    ],
    "answer": "Equality of women and men"
  },
  {
    "id": 124,
    "question": "Why is the battle of Vimy Ridge important?",
    "options": [
      "It was a key position of the German line in Northern Spain. ",
      "Canadian Corps secured its reputation for valour and bravery",
      "It was the \"hinge\" of the German line as it protected the newly constructed Hindenburg line",
      "Once Canadians fought at Vimy they knew they would be heading home"
    ],
    "answer": "Canadian Corps secured its reputation for valour and bravery"
  },
  {
    "id": 125,
    "question": "What is a majority government?",
    "options": [
      "When the party in power holds about one third of the seats in the House of Commons",
      "When the party in power holds about one quarter of the seats in the House of Commons",
      "When the part in power holds at least half of the seats in the Senate",
      "When the party in power holds at least half of the seats in the House of Commons"
    ],
    "answer": "When the party in power holds at least half of the seats in the House of Commons"
  },
  {
    "id": 126,
    "question": "Which province is the main producer of pulp and paper and hydro-electricity?",
    "options": [
      "Quebec",
      "Ontario",
      "British Columbia",
      "Manitoba"
    ],
    "answer": "Quebec"
  },
  {
    "id": 127,
    "question": "A Member of Parliament from Montreal announces that she will spend her weekend in her electoral district.  This means she would be:",
    "options": [
      "In her office on Parliament Hill",
      "Visiting the province of Quebec",
      "In the part of Montreal where she was elected",
      "Going on a vacation"
    ],
    "answer": "In the part of Montreal where she was elected"
  },
  {
    "id": 128,
    "question": "Who led Quebec into Confederation? ",
    "options": [
      "Sir Louis-Hippolyte La Fontaine",
      "Sir George-Étienne Cartier",
      "Sir Wilfrid Laurier",
      "Sir John A. Macdonald"
    ],
    "answer": "Sir George-Étienne Cartier"
  },
  {
    "id": 129,
    "question": "How is a Cabinet Minister chosen?",
    "options": [
      "By the Queen",
      "By the voters",
      "By other Cabinet Ministers",
      "By the Prime Minister"
    ],
    "answer": "By the Prime Minister"
  },
  {
    "id": 130,
    "question": "The Canadian Coat of Arms and motto is \"A Mari Usque Ad Mare.\"  This means:",
    "options": [
      "From the ocean to the sea",
      "From sea to sea",
      "From the sea to the ends of the earth",
      "From the water to the earth"
    ],
    "answer": "From sea to sea"
  },
  {
    "id": 131,
    "question": "Canada has three territories and how many provinces?",
    "options": [
      "13",
      "10",
      "3",
      "5"
    ],
    "answer": "10"
  },
  {
    "id": 132,
    "question": "Who is the leader of the Federal Official Opposition Party?",
    "options": [
      "Thomas Mulcair",
      "Stéphane Dion",
      "Andrew Scheer",
      "Elizabeth May"
    ],
    "answer": "Andrew Scheer"
  },
  {
    "id": 133,
    "question": "Why is trade with other countries important to Canada?",
    "options": [
      "It enhances our standard of living",
      "It makes it easier for us to travel to foreign countries",
      "It enhances our economy and raises our standard of living",
      "It brings in cheaper goods"
    ],
    "answer": "It enhances our economy and raises our standard of living"
  },
  {
    "id": 134,
    "question": "Name two responsibilities of the provincial and territorial government",
    "options": [
      "Citizenship and Foreign Policy",
      "Health and Education",
      "Defense and Currency",
      "Criminal Law and Interprovincial Trade"
    ],
    "answer": "Health and Education"
  },
  {
    "id": 135,
    "question": "Who is the Head of Government?",
    "options": [
      "The President",
      "The Queen",
      "The Governor General",
      "The Prime Minister"
    ],
    "answer": "The Prime Minister"
  },
  {
    "id": 136,
    "question": "What is the highest court in Canada? ",
    "options": [
      "The Queen's Court",
      "The Senate Court of Canada",
      "The Supreme Court of Canada",
      "The Crown Court of Canada"
    ],
    "answer": "The Supreme Court of Canada"
  },
  {
    "id": 137,
    "question": "Which province was to first to grant voting rights to women?",
    "options": [
      "Quebec",
      "Ontario",
      "Nova Scotia",
      "Manitoba"
    ],
    "answer": "Manitoba"
  },
  {
    "id": 138,
    "question": "What year did Newfoundland and Labrador join Canada?",
    "options": [
      "1867",
      "1955",
      "1949",
      "1880"
    ],
    "answer": "1949"
  },
  {
    "id": 139,
    "question": "Which provincial flag features the fleur-de-lys?",
    "options": [
      "Quebec",
      "New Brunswick",
      "Manitoba",
      "Ontario"
    ],
    "answer": "Quebec"
  },
  {
    "id": 140,
    "question": "Where does Canada rank in the world's largest countries? ",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "answer": "Second"
  },
  {
    "id": 141,
    "question": "What is a Francophone?",
    "options": [
      "A person who speaks English as their first language",
      "A smartphone designed by the Canadian company RIM ",
      "A person who speaks French as their first language",
      "The first phone in Canada, invented by Alexander Graham Bell"
    ],
    "answer": "A person who speaks French as their first language"
  },
  {
    "id": 142,
    "question": "Which province has its own time zone? ",
    "options": [
      "British Columbia",
      "Newfoundland and Labrador",
      "Nunavut",
      "Nova Scotia"
    ],
    "answer": "Newfoundland and Labrador"
  },
  {
    "id": 143,
    "question": "Which port is the largest and busiest in Canada?",
    "options": [
      "The Port of Halifax",
      "The Port of Montreal",
      "The Port of Vancouver",
      "The Port of Victoria"
    ],
    "answer": "The Port of Vancouver"
  },
  {
    "id": 144,
    "question": "What was the \"Underground Railroad\"?",
    "options": [
      "An anti-slavery network that helped thousands of slaves escape the United States and settle in Canada",
      "A railroad through the Rockies that was mainly through mountain tunnels",
      "A network fur traders used to transport beaver pelts to the United States ",
      "The first underground subway tunnel in Toronto"
    ],
    "answer": "An anti-slavery network that helped thousands of slaves escape the United States and settle in Canada"
  },
  {
    "id": 145,
    "question": "What does the \"right to a secret ballot\" mean?",
    "options": [
      "No one should tell you where to vote",
      "A secret vote used by politicians when they are voting on sensitive topics",
      "No one can watch your vote and no one should look at how you voted",
      "Your right to vote in secret on who to appoint to the Senate "
    ],
    "answer": "No one can watch your vote and no one should look at how you voted"
  },
  {
    "id": 146,
    "question": "Who led an armed uprising and seized Fort Garry? ",
    "options": [
      "John A. Macdonald",
      "Louis Riel",
      "Sam Steele",
      "George-Étienne Cartier"
    ],
    "answer": "Louis Riel"
  },
  // {
  //   "id": 147,
  //   "question": "Name the federal electoral districts in Richmond, British Columbia",
  //   "options": [
  //     "Richmond has two federal electoral districts: Richmond North and Richmond South",
  //     "Richmond has two federal electoral districts: Richmond East and Richmond West",
  //     "Richmond has two federal electoral districts: Richmond and Richmond South",
  //     "Richmond has two federal electoral districts: Richmond Centre and Steveston-Richmond East"
  //   ]
  // },
  // {
  //   "id": 148,
  //   "question": "Name three city councillors for Richmond, British Columbia",
  //   "options": [
  //     "Malcolm Brodie, Derek Dang and Ernie Novakowski",
  //     "Lyn Greenhill, Kiichi Kumagai and Lily von Hendron",
  //     "Bill McNulty, Linda McPhail, Kelly Greene, Chak Au,",
  //     "Ken Johnston, Bill McNulty and Lee Bailey"
  //   ]
  // },
  // {
  //   "id": 149,
  //   "question": "What is the name of the Mayor of Richmond, British Columbia?",
  //   "options": [
  //     "Mayor Richard Lee",
  //     "Mayor Bill McNulty",
  //     "Mayor Linda McPhail",
  //     "Mayor Malcolm Brodie"
  //   ]
  // },
  // {
  //   "id": 150,
  //   "question": "Name the Members of the Legislative Assembly for Richmond, British Columbia and the parties they belong to (Richmond North Centre, Richmond South Centre, Richmond-Steveston, and Richmond-Queensborough respectively)",
  //   "options": [
  //     "Rob Howard (Richmond North Centre), Linda Reid (Richmond South Centre), John Cummins (Richmond-Steveston), and Malcolm Brodie (Richmond-Queensborough)",
  //     "John Cummins (Richmond North Centre), Linda Reid (Richmond South Centre), John Yap (Richmond-Steveston), and Greg Halseybrandt (Richmond-Queensborough)",
  //     "Olga Ilich (Richmond North Centre), Rob Howard (Richmond South Centre), Jas Johal (Richmond-Steveston), and John Yap (Richmond-Queensborough)",
  //     "Teresa Wat (Richmond Centre), Linda Reid (Richmond East), John Yap (Richmond Steveston), Jas Johal (Richmond-Queensborough)"
  //   ]
  // },
  // {
  //   "id": 151,
  //   "question": "Name the members of Parliament for Richmond, British Columbia and the parties they belong to (Richmond, Steveston-Richmond East respectively)",
  //   "options": [
  //     "Alice Wong (Conservative), Joe Peschisolido (Liberal)",
  //     "Raymond Chan (Liberal), Kerry-Lynne Findlay (Conservative Party of Canada)",
  //     "John Cummings (Conservative), Christie Clark (Liberal)",
  //     "Greg Halsey-Brandt (Liberal), Geoff Plant (Liberal)"
  //   ]
  // },
  {
    "id": 152,
    "question": "What is the capital city of British Columbia?",
    "options": [
      "Vancouver",
      "Prince George",
      "Victoria",
      "New Westminster"
    ],
    "answer": "Victoria"
  },
];

export default rawQuestions