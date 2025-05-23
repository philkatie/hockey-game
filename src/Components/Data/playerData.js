const playerData = [
  {
    "name": "Sidney Crosby",
    "debut_season": 2005,
    "draft_number": 1,
    "team_most_seasons": "Pittsburgh Penguins",
    "seasons_played": 20,
    "status": "Active",
    "jersey_number": 87,
    "position": "Centre"
  },
  {
    "name": "Alex Ovechkin",
    "debut_season": 2005,
    "draft_number": 1,
    "team_most_seasons": "Washington Capitals",
    "seasons_played": 20,
    "status": "Active",
    "jersey_number": 8,
    "position": "Left Wing"
  },
  {
    "name": "Jaromír Jágr",
    "debut_season": 1990,
    "draft_number": 5,
    "team_most_seasons": "Pittsburgh Penguins",
    "seasons_played": 24,
    "status": "Retired",
    "jersey_number": 68,
    "position": "Right Wing"
  },
  {
    "name": "Mark Messier",
    "debut_season": 1979,
    "draft_number": 48,
    "team_most_seasons": "Edmonton Oilers",
    "seasons_played": 25,
    "status": "Retired",
    "jersey_number": 11,
    "position": "Centre"
  },
  {
    "name": "Joe Nieuwendyk",
    "debut_season": 1987,
    "draft_number": 27,
    "team_most_seasons": "Calgary Flames",
    "seasons_played": 20,
    "status": "Retired",
    "jersey_number": 25,
    "position": "Centre"
  },
  {
    "name": "Patrick Marleau",
    "debut_season": 1997,
    "draft_number": 2,
    "team_most_seasons": "San Jose Sharks",
    "seasons_played": 23,
    "status": "Retired",
    "jersey_number": 12,
    "position": "Centre / Left Wing"
  },
  {
    "name": "Marc-André Fleury",
    "debut_season": 2003,
    "draft_number": 1,
    "team_most_seasons": "Pittsburgh Penguins",
    "seasons_played": 22,
    "status": "Retired",
    "jersey_number": 29,
    "position": "Goaltender"
  },
  {
    "name": "Macklin Celebrini",
    "debut_season": 2024,
    "draft_number": 1,
    "team_most_seasons": "San Jose Sharks",
    "seasons_played": 1,
    "status": "Active",
    "jersey_number": 71,
    "position": "Centre"
  },
  {
    "name": "Lane Hutson",
    "debut_season": 2024,
    "draft_number": 62,
    "team_most_seasons": "Montreal Canadiens",
    "seasons_played": 1,
    "status": "Active",
    "jersey_number": 20,
    "position": "Defenseman"
  },
  {
    "name": "Dustin Wolf",
    "debut_season": 2024,
    "draft_number": 214,
    "team_most_seasons": "Calgary Flames",
    "seasons_played": 1,
    "status": "Active",
    "jersey_number": 32,
    "position": "Goaltender"
  },
  {
    "name": "Matty Beniers",
    "debut_season": 2022,
    "draft_number": 2,
    "team_most_seasons": "Seattle Kraken",
    "seasons_played": 3,
    "status": "Active",
    "jersey_number": 10,
    "position": "Centre"
  },
  {
    "name": "Alexander Georgiev",
    "debut_season": 2017,
    "draft_number": "Undrafted",
    "team_most_seasons": "New York Rangers",
    "seasons_played": 8,
    "status": "Active",
    "jersey_number": 40,
    "position": "Goaltender"
  },
  {
    "name": "Derek Grant",
    "debut_season": 2013,
    "draft_number": 119,
    "team_most_seasons": "Anaheim Ducks",
    "seasons_played": 10,
    "status": "Active",
    "jersey_number": 38,
    "position": "Forward"
  },
  {
    "name": "Matthew Robertson",
    "debut_season": 2025,
    "draft_number": 49,
    "team_most_seasons": "New York Rangers",
    "seasons_played": 1,
    "status": "Active",
    "jersey_number": 88,
    "position": "Defenseman"
  },
  {
    "name": "Connor McDavid",
    "debut_season": 2015,
    "draft_number": 1,
    "team_most_seasons": "Edmonton Oilers",
    "seasons_played": 10,
    "status": "Active",
    "jersey_number": 97,
    "position": "Centre"
  },
  {
    "name": "Nathan MacKinnon",
    "debut_season": 2013,
    "draft_number": 1,
    "team_most_seasons": "Colorado Avalanche",
    "seasons_played": 12,
    "status": "Active",
    "jersey_number": 29,
    "position": "Centre"
  },
  {
    "name": "Carey Price",
    "debut_season": 2007,
    "draft_number": 5,
    "team_most_seasons": "Montreal Canadiens",
    "seasons_played": 15,
    "status": "Retired",
    "jersey_number": 31,
    "position": "Goaltender"
  },
  {
    "name": "Zdeno Chára",
    "debut_season": 1997,
    "draft_number": 56,
    "team_most_seasons": "Boston Bruins",
    "seasons_played": 24,
    "status": "Retired",
    "jersey_number": 33,
    "position": "Defenseman"
  },
  {
    "name": "Jonathan Toews",
    "debut_season": 2007,
    "draft_number": 3,
    "team_most_seasons": "Chicago Blackhawks",
    "seasons_played": 15,
    "status": "Retired",
    "jersey_number": 19,
    "position": "Centre"
  },
  {
    "name": "Henrik Lundqvist",
    "debut_season": 2005,
    "draft_number": 205,
    "team_most_seasons": "New York Rangers",
    "seasons_played": 15,
    "status": "Retired",
    "jersey_number": 30,
    "position": "Goaltender"
  },
  {
    "name": "Steven Stamkos",
    "debut_season": 2008,
    "draft_number": 1,
    "team_most_seasons": "Tampa Bay Lightning",
    "seasons_played": 17,
    "status": "Active",
    "jersey_number": 91,
    "position": "Centre"
  },
  {
    "name": "Erik Karlsson",
    "debut_season": 2009,
    "draft_number": 15,
    "team_most_seasons": "Ottawa Senators",
    "seasons_played": 16,
    "status": "Active",
    "jersey_number": 65,
    "position": "Defenseman"
  },
  {
    "name": "Anze Kopitar",
    "debut_season": 2006,
    "draft_number": 11,
    "team_most_seasons": "Los Angeles Kings",
    "seasons_played": 19,
    "status": "Active",
    "jersey_number": 11,
    "position": "Centre"
  },
  {
    "name": "Pekka Rinne",
    "debut_season": 2005,
    "draft_number": 258,
    "team_most_seasons": "Nashville Predators",
    "seasons_played": 15,
    "status": "Retired",
    "jersey_number": 35,
    "position": "Goaltender"
  },
  {
    "name": "Jamie Benn",
    "debut_season": 2009,
    "draft_number": 129,
    "team_most_seasons": "Dallas Stars",
    "seasons_played": 16,
    "status": "Active",
    "jersey_number": 14,
    "position": "Left Wing"
  }
]

export default playerData;