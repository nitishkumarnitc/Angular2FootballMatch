//Not needed actually

export interface Competition {
  id: number,
  caption:string,
  league:string,
  year: number,
  currentMatchday:number,
  numberOfMatchdays:number,
  numberOfTeams:number,
  numberOfGames: number,
  lastUpdated:string,
  _links:Urls,
}

export interface Urls{
  self:URL;
  teams:URL,
  fixtures:URL,
  leagueTable:URL
}

export interface URL{
  href:string;
}
