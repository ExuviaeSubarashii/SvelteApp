export type UserByToken = {
  userName: string,
  following: string,
  followers: string,
  userId: number
}
export type UserById = {
  userName: string,
  following: string,
  followers: string,
  userId: number,
  isFollowing: boolean
}
export type Playlist = {
  dateCreated: Date,
  playListContents: string,
  playListCount: number,
  playListId: string,
  playListOwner: string,
  playListOwnerId: number,
  playListTitle: string,
  playListType: string
}
export type FollowType = {
  userName: string,
  userId: string,
  requestType: string
}
export type SearchPlaylist = {
  PlayListId: string;
  PlayListOwner: string;
  PlayListContents: string;
  PlayListType: string;
  PlayListTitle: string;
  PlayListCount: number;
  PlayListOwnerId: number;
  DateCreated: Date;
};

export type User = {
  Id: number;
  UserName: string;
};

export type Song = {
  SongId: number;
  SongName: string;
  SongArtist: string;
  AlbumName: string;
};
export type PlaylistContents = {
  albumName: string,
  duration: number,
  playlistName: string,
  songArtist: string,
  songId: number,
  songName: string
}