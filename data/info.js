var json_info = `[
{
  "tag": "RedbrandHideoutLocation",
  "name": "The Redbrand hideout is at Tresendar Manor",
  "known": false, 
  "actedOn": false,
  "locations": ["TresendarManor"],
  "goesTo": ["FindRedbrands"],
  "storyline": "RedbrandStory", 
  "step": "Find location of Redbrand hideout"
},
{
  "tag": "SecretTunnelLocation",
  "name": "The Redbrand hideout has a secret tunnel entrance located near Tresendar Manor",
  "known": false,
  "actedOn": false,
  "locations": ["TresendarManor"],
  "goesTo": ["FindRedbrands"],
  "storyline": "RedbrandStory",
  "step": "Find location of Redbrand hideout"
},
{
  "tag": "SecretTunnelKnowledge",
  "name": "Carp at Alderleaf Farm saw a secret tunnel in the woods; the Redbrands almost caught him",
  "known": false,
  "actedOn": false,
  "locations": ["AlderleafFarm"],
  "goesTo": ["SecretTunnelLocation"],
  "storyline": "RedbrandStory"
},
{
  "tag": "OrcsTriboarTrail",
  "name": "The townmaster wants someone to deal with the orcs around Triboar Trail",
  "known": false,
  "actedOn": false,
  "locations": ["OrcCamp"],
  "goesTo": ["RemoveOrcCamp"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "DendrarFamilyKidnapped",
  "name": "Thal Dendrar stood up to Redbrands; they killed him and kidnapped his family",
  "known": false,
  "actedOn": false,
  "locations": [],
  "goesTo": ["LearnAboutRedbrands"],
  "storyline": "RedbrandStory"
},
{
  "tag": "RedbrandsAndHalia",
  "name": "Redbrands don't mess with Halia at Phandalin Miner's Exchange",
  "known": false,
  "actedOn": false,
  "locations": ["PhandalinMinersExchange"],
  "goesTo": ["KillRedbrandLeader", "GoblinCragmawCastle"],
  "storyline": "RedbrandStory"
},
{
  "tag": "RedbrandHangout",
  "name": "Redbrands hang out at Sleeping Giant Tap House and they are trouble",
  "known": false,
  "actedOn": false,
  "locations": ["SleepingGiantTapHouse"],
  "goesTo": ["LearnAboutRedbrands"],
  "storyline": "RedbrandStory"
},
{
  "tag": "SisterGaraeleExhausted",
  "name": "Sister Garaele recently returned to the Shrine of Luck injured and exhausted",
  "known": false,
  "actedOn": false,
  "locations": ["ShrineOfLuck"],
  "goesTo": ["AskAgathaAboutBook"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "GoblinCragmawCastle",
  "name": "The goblin working for the Redbrands might know the way to Cragmaw Castle; Halia will leverage this info to get players to accept her quest",
  "known": false,
  "actedOn": false,
  "locations": ["TresendarManor"],
  "goesTo": ["LearnAboutRedbrands"],
  "storyline": "CragmawCastleStory"
},
{
  "tag": "KillRedbrandLeader",
  "name": "Wants players to kill the leader of the Redbrands (she has secret plans to take over)",
  "known": false,
  "actedOn": false,
  "locations": ["TresendarManor"],
  "goesTo": ["LearnAboutRedbrands"],
  "storyline": "RedbrandStory"
},
{
  "tag": "GetRidOfRedbrands",
  "name": "Wants players to take out Redbrands",
  "known": false,
  "actedOn": false,
  "locations": [],
  "goesTo": ["LearnAboutRedbrands"],
  "storyline": "RedbrandStory"
},
{
  "tag": "DiggingOldOwlWell",
  "name": "QUEST: There is undead and digging at Old Owl Well, used to be magical, want someone to investigate",
  "known": false,
  "actedOn": false,
  "locations": ["OldOwlWell"],
  "goesTo": ["HamunQuest"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "AskAgathaAboutBook",
  "name": "QUEST: Go to Agatha's Lair with comb, ask Agatha the banshee about wizard book location",
  "known": false,
  "actedOn": false,
  "locations": ["AgathasLair"],
  "goesTo": ["AgathaInfo"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "MissingIarno",
  "name": "Looking for missing member of order, Iarno (he is secretly new leader of Redbrands)",
  "known": false,
  "actedOn": false,
  "locations": [],
  "goesTo": ["LearnAboutRedbrands"],
  "storyline": "RedbrandStory"
},
{
  "tag": "TownmasterAndRedbrands",
  "name": "Townmaster doesn't want players to mess with Redbrands, keep them in jail",
  "known": false,
  "actedOn": false,
  "locations": [],
  "goesTo": [],
  "storyline": "RedbrandStory"
},
{
  "tag": "RedbrandShakedown",
  "name": "The Redbrands are shaking down local businesses",
  "known": false,
  "actedOn": false,
  "locations": [],
  "goesTo": ["LearnAboutRedbrands"],
  "storyline": "RedbrandStory"
},
{
  "tag": "ReidothLocation",
  "name": "A druid named Reidoth can help you find Cragmaw Castle or Wave Echo Cave; they are at ruins of Thundertree",
  "known": false,
  "actedOn": false,
  "locations": ["Thundertree"],
  "goesTo": ["GreenDragon"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "AgathaInfo",
  "name": "If players are nice to Agatha or give her the comb, she can give them one piece of information",
  "known": false,
  "actedOn": false,
  "locations": ["WaveEchoCave", "CragmawCastle"],
  "goesTo": ["FindCragmawCastle", "FindWaveEchoCave", "LearnTowerMaker"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "GreenDragon",
  "name": "Wants players to get rid of green dragon in Thundertree in exchange for info on Wave Echo Cave / Cragmaw Castle",
  "known": false,
  "actedOn": false,
  "locations": ["WaveEchoCave", "CragmawCastle"],
  "goesTo": ["FindWaveEchoCave", "FindCragmawCastle"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "WaveEchoCaveMap",
  "name": "Has a map leading to Wave Echo Cave",
  "known": false,
  "actedOn": false,
  "locations": ["WaveEchoCave"],
  "goesTo": ["FindWaveEchoCave"],
  "storyline": "WaveEchoCaveStory"
},
{
  "tag": "HamunQuest",
  "name": "Hamun wants you to get rid of the orc camp at Triboar Trail or ask Agatha about who made the magic tower in exchange for the location to Wave Echo Cave",
  "known": false,
  "actedOn": false,
  "locations": ["AgathasLair", "OrcCamp", "WaveEchoCave"],
  "goesTo": ["RemoveOrcCamp", "LearnTowerMaker"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "RedbrandMinionInfo",
  "name": "You find some bugbears messing with a goblin, Droop. After defeating the bugbears you can interrogate them or get Droop to tell you the location of Cragmaw Castle",
  "known": false,
  "actedOn": false,
  "locations": ["CragmawCastle"],
  "goesTo": ["FindCragmawCastle"],
  "storyline": "CragmawCastleStory"
},
{
  "tag": "LearnAboutRedbrands",
  "name": "Motivate players  to take down Redbrands",
  "known": false,
  "actedOn": false,
  "goesTo": ["FindRedbrands"],
  "storyline": "RedbrandStory"
},
{
  "tag": "FindRedbrands",
  "name": "Find location of and enter Redbrand hideout",
  "known": false,
  "actedOn": false,
  "goesTo": ["RedbrandMinionInfo"],
  "storyline": "RedbrandStory"
},
{
  "tag": "FindCragmawCastle",
  "name": "Find location of Cragmaw Castle",
  "known": false,
  "actedOn": false,
  "goesTo": ["WaveEchoCaveMap"],
  "storyline": "CragmawCastleStory"
},
{
  "tag": "FindWaveEchoCave",  
  "name": "Explore Wave Echo Cave",
  "known": false,
  "actedOn": false,
  "goesTo": [],
  "storyline": "WaveEchoCaveStory"
},
{
  "tag": "RemoveOrcCamp",  
  "name": "Players can remove orc camp from Wyvern Tor",
  "known": false,
  "actedOn": false,
  "goesTo": ["FinishHamunQuest"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "FinishHamunQuest",  
  "name": "Talk to Hamun about completing one of his tasks",
  "known": false,
  "actedOn": false,
  "goesTo": ["FindWaveEchoCave"],
  "storyline": "EitherLocationStory"
},
{
  "tag": "LearnTowerMaker",  
  "name": "Ask Agatha about maker of old magic tower ruin",
  "known": false,
  "actedOn": false,
  "goesTo": ["FinishHamunQuest"],
  "storyline": "EitherLocationStory"
}
]`