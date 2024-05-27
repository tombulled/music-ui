import { AlbumType } from "./enums";
import { Album } from "./types";

export const ALBUM_THUMBNAIL: string =
  "https://lh3.googleusercontent.com/vIFjUF3ke2wAQxDSJ_InRwM3mYfK2YwmhqOb-rM8s37qPAJQuZ5ZFTEAJSvbCrhOXE5Dlq0RyvATB8fa0Q=w544-h544-l90-rj";
// export const ALBUM_THUMBNAIL: string = "https://i9.ytimg.com/s_p/OLAK5uy_k-nVhxfuIQFO2ZE9EvqPKKM4__S3aOb_Y/maxresdefault.jpg?sqp=CNzeyK4Gir7X7AMICPHGuq4GEAE=&rs=AOn4CLDbTmt9CQb6PwAy_4LyBG43Ci7yBA&v=1708041073"

export const ALBUM_3: Album = {
  id: "abc123",
  name: "A Safe Place To Be",
  year: 2021,
  artists: [
    {
      id: "def456",
      name: "Aquilo",
    },
  ],
  type: AlbumType.Album,
  artwork: [
    {
      width: 1200,
      height: 1200,
      url: "/sample/album.png",
    },
  ],
};

export const ALBUM_2: any = {
  id: "OLAK5uy_kRjXobVjFEz323V44CIfuKCKRngWX-Ogg",
  name: "A Safe Place To Be",
  type: "Album",
  artist: {
    name: "Aquilo",
  },
  year: 2021,
  description: null,
  artwork: [
    {
      height: 1200,
      url: "/sample/album.png",
      width: 1200,
    },
  ],
  tracks: [
    {
      id: "1",
      name: "Out in LA",
      duration: "3:45",
    },
    {
      id: "2",
      name: "Our Bones Turn To Stone",
      duration: "4:21",
    },
    {
      id: "3",
      name: "Talking To Yourself",
      duration: "3:24",
    },
    {
      id: "4",
      name: "You Make Me Mad",
      duration: "3:07",
    },
    {
      id: "5",
      name: "Stupid Not To Try",
      duration: "2:59",
    },
    {
      id: "6",
      name: "Costume Change",
      duration: "4:20",
    },
    {
      id: "7",
      name: "Hanging On",
      duration: "3:36",
    },
    {
      id: "8",
      name: "Our Days Are Numbered",
      duration: "3:16",
    },
    {
      id: "9",
      name: "Silver Spoon",
      duration: "3:29",
    },
    {
      id: "10",
      name: "Better Off As Strangers",
      duration: "3:46",
    },
    {
      id: "11",
      name: "I Wanna See You Smile",
      duration: "3:20",
    },
  ],
};

export const PLAYLIST: any = {
  id: "OLAK5uy_k-nVhxfuIQFO2ZE9EvqPKKM4__S3aOb_Y",
  thumbnails: [
    {
      height: 180,
      url: "https://i9.ytimg.com/s_p/OLAK5uy_k-nVhxfuIQFO2ZE9EvqPKKM4__S3aOb_Y/mqdefault.jpg?sqp=CJCFyq4Gir7X7AMICPHGuq4GEAE=&rs=AOn4CLAzVspK092Z--MxRP-h-mmvuxfKxg&v=1708041073&days_since_epoch=19771",
      width: 180,
    },
    {
      height: 640,
      url: "https://i9.ytimg.com/s_p/OLAK5uy_k-nVhxfuIQFO2ZE9EvqPKKM4__S3aOb_Y/sddefault.jpg?sqp=CJCFyq4Gir7X7AMICPHGuq4GEAE=&rs=AOn4CLCWIDe85BFB_60KbF5ik5cTB_pW1g&v=1708041073&days_since_epoch=19771",
      width: 640,
    },
    {
      height: 1200,
      url: "https://i9.ytimg.com/s_p/OLAK5uy_k-nVhxfuIQFO2ZE9EvqPKKM4__S3aOb_Y/maxresdefault.jpg?sqp=CJCFyq4Gir7X7AMICPHGuq4GEAE=&rs=AOn4CLCVuI7MfRgtT2CgO6gRR5Y7e--29Q&v=1708041073&days_since_epoch=19771",
      width: 1200,
    },
  ],
  title: "Album - Philophobia",
  videos: [
    {
      duration: 43,
      id: "CrU4ApD6GHU",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/CrU4ApD6GHU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCJo6iqUePLeU2DCxT1C8uibKKdOg",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/CrU4ApD6GHU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCD1tk9ofPgys2vR9x2X6jduH7R9A",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/CrU4ApD6GHU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABQN66Tdqo8EXdwff_i80v8cvccw",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/CrU4ApD6GHU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMXBKM-IzT8MNhP3VXSI9e1RW36w",
          width: 336,
        },
      ],
      title: "Leader Countdown",
    },
    {
      duration: 217,
      id: "Q0xRXKiFgcQ",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/Q0xRXKiFgcQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD5SMoJ6rRDOOCLRt99vqriM1JKJw",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/Q0xRXKiFgcQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCB8CuYg2OoxwnGXOtLeL6pEyLa_w",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/Q0xRXKiFgcQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFvVW2JntSgjPsNUQAHpn9pN1MgQ",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/Q0xRXKiFgcQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCowe62TvzKMWiPB2VVGZinLbn-oQ",
          width: 336,
        },
      ],
      title: "Neon Circus",
    },
    {
      duration: 218,
      id: "Mnha8CGLsMU",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/Mnha8CGLsMU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWab7mwDA0vLmzjAp2EDSGrkjaEA",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/Mnha8CGLsMU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBx90lLlXvnwnIA-dWCPj6q4Nui9Q",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/Mnha8CGLsMU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUgyhom_FTUUPzV7NOFqls11yekQ",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/Mnha8CGLsMU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjH9WZnFgTJALJAIrNDQlp09N2_g",
          width: 336,
        },
      ],
      title: "No One Gets out Alive",
    },
    {
      duration: 237,
      id: "xikoU3SAbfQ",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/xikoU3SAbfQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD9F7BjtN9r6iwVZJznEJuuZYjqFw",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/xikoU3SAbfQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBDsYprMfHRGe1TyzjkugWT3YNu7g",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/xikoU3SAbfQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIGXxDgj5n_-L2HX4LfYcy5g3F0A",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/xikoU3SAbfQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0ZtW3pBSc_JZ9FyZtKL0kEG2Nrg",
          width: 336,
        },
      ],
      title: "What Could Be as Lonely as Love",
    },
    {
      duration: 172,
      id: "Siyqiui7Rs8",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/Siyqiui7Rs8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAwlaVyC76bCGJJURu6CNieVVnG-g",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/Siyqiui7Rs8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDqwmSpz-I12bjV7FmLxdVlOM-5kA",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/Siyqiui7Rs8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAowcbsVmcas4zJNLubW4atNo66FA",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/Siyqiui7Rs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCntCNdv3wU7RuzKDQW73fru9XI_g",
          width: 336,
        },
      ],
      title: "Carousel",
    },
    {
      duration: 272,
      id: "4if0JwWCgbk",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/4if0JwWCgbk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDnVpEXIF8z4GmsQkRbv-2Ip5BFUg",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/4if0JwWCgbk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCQYLFoR2AkBwCKUKP0ARvJTKRRpA",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/4if0JwWCgbk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIa0BdNQv6tMj47cNDMVrqV7tYuQ",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/4if0JwWCgbk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDA0b6zHdZtmXEXZjNFzDoZ1BiaPQ",
          width: 336,
        },
      ],
      title: "Affection",
    },
    {
      duration: 270,
      id: "_NWaQMaLyTg",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/_NWaQMaLyTg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB3ZlpP3qWgZZV0e0zrLlP-W_4B7g",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/_NWaQMaLyTg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC5qMD7WCPVJNkJ_qkITgyBUdz2fQ",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/_NWaQMaLyTg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQCsyVX3dOr7hIC-axRoCwzmW1BQ",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/_NWaQMaLyTg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI7lFnIIZLYEI0WkX9AbgcKvYYpA",
          width: 336,
        },
      ],
      title: "Medicine",
    },
    {
      duration: 278,
      id: "_kYSj_6KUHM",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/_kYSj_6KUHM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAvgveHH568Ehu_rKmefLtQse7sSg",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/_kYSj_6KUHM/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLACm2DSDDJ692jLFVWfF-_s5yFgOQ",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/_kYSj_6KUHM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_akufv0CEegoGbXHjcAOywT1qzg",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/_kYSj_6KUHM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgeRYaSr3vy5vS8ly6snw_qHQ66g",
          width: 336,
        },
      ],
      title: "I Dare You",
    },
    {
      duration: 211,
      id: "uTodLRy-4xs",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/uTodLRy-4xs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBuaBoAntd8pBjfXvNTDyGb9Y53jg",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/uTodLRy-4xs/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvuxol6mY1qMmkplU-561BAphwTg",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/uTodLRy-4xs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdp0tELpYPIHZhT3cSv5ZyXWOgLA",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/uTodLRy-4xs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHOMKt1PHkqxsUf7ETAreM0JM2Og",
          width: 336,
        },
      ],
      title: "The Darkness Has a Voice",
    },
    {
      duration: 177,
      id: "5q9AybWL8PE",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/5q9AybWL8PE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBfXfiMjJPrnCNHCi-ysdSk2lJY3Q",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/5q9AybWL8PE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQv5dVHFh1GAwUf9fjO_Z950xtow",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/5q9AybWL8PE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxYc5AfwwjeoK7nxRfIw-o-T1kiA",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/5q9AybWL8PE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqpxjKVLEd2p7c133IDRtp9lNTGA",
          width: 336,
        },
      ],
      title: "Entertainment",
    },
    {
      duration: 238,
      id: "QmjwGu9kKZo",
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/QmjwGu9kKZo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCJI3FqIMB2SfoRf8THjDs4nDBeSQ",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/QmjwGu9kKZo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrxQg__rhTWRScL0xmQxtw0piEZA",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/QmjwGu9kKZo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGESAriTwQzufln8yw4oRistph_g",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/QmjwGu9kKZo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-q2AJ6IVPQvl9Ko3LRQbryVtXng",
          width: 336,
        },
      ],
      title: "Worship",
    },
  ],
};

export const ALBUM: any = {
  channel_name: "Amber Run",
  id: "OLAK5uy_k-nVhxfuIQFO2ZE9EvqPKKM4__S3aOb_Y",
  name: "Philophobia",
  songs: [
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "CrU4ApD6GHU",
      name: "Leader Countdown",
      thumbnail:
        "https://i.ytimg.com/vi/CrU4ApD6GHU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMXBKM-IzT8MNhP3VXSI9e1RW36w",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "Q0xRXKiFgcQ",
      name: "Neon Circus",
      thumbnail:
        "https://i.ytimg.com/vi/Q0xRXKiFgcQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCowe62TvzKMWiPB2VVGZinLbn-oQ",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "Mnha8CGLsMU",
      name: "No One Gets out Alive",
      thumbnail:
        "https://i.ytimg.com/vi/Mnha8CGLsMU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjH9WZnFgTJALJAIrNDQlp09N2_g",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "xikoU3SAbfQ",
      name: "What Could Be as Lonely as Love",
      thumbnail:
        "https://i.ytimg.com/vi/xikoU3SAbfQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0ZtW3pBSc_JZ9FyZtKL0kEG2Nrg",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "Siyqiui7Rs8",
      name: "Carousel",
      thumbnail:
        "https://i.ytimg.com/vi/Siyqiui7Rs8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCntCNdv3wU7RuzKDQW73fru9XI_g",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "4if0JwWCgbk",
      name: "Affection",
      thumbnail:
        "https://i.ytimg.com/vi/4if0JwWCgbk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDA0b6zHdZtmXEXZjNFzDoZ1BiaPQ",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "_NWaQMaLyTg",
      name: "Medicine",
      thumbnail:
        "https://i.ytimg.com/vi/_NWaQMaLyTg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI7lFnIIZLYEI0WkX9AbgcKvYYpA",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "_kYSj_6KUHM",
      name: "I Dare You",
      thumbnail:
        "https://i.ytimg.com/vi/_kYSj_6KUHM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgeRYaSr3vy5vS8ly6snw_qHQ66g",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "uTodLRy-4xs",
      name: "The Darkness Has a Voice",
      thumbnail:
        "https://i.ytimg.com/vi/uTodLRy-4xs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHOMKt1PHkqxsUf7ETAreM0JM2Og",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "5q9AybWL8PE",
      name: "Entertainment",
      thumbnail:
        "https://i.ytimg.com/vi/5q9AybWL8PE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqpxjKVLEd2p7c133IDRtp9lNTGA",
    },
    {
      album: null,
      artist: {
        browse_id: "UCV3E_B9ZBCg8x-Zivau5syg",
        name: "Amber Run Official",
      },
      id: "QmjwGu9kKZo",
      name: "Worship",
      thumbnail:
        "https://i.ytimg.com/vi/QmjwGu9kKZo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-q2AJ6IVPQvl9Ko3LRQbryVtXng",
    },
  ],
  thumbnail:
    "https://i9.ytimg.com/s_p/OLAK5uy_k-nVhxfuIQFO2ZE9EvqPKKM4__S3aOb_Y/maxresdefault.jpg?sqp=CJyEya4Gir7X7AMICPHGuq4GEAE=&rs=AOn4CLD-vM4Ih36bTgphInAWL1GmGZEylA&v=1708041073",
};

export const CHANNEL: any = {
  description:
    'Amber Run are a British indie rock band from Nottingham, composed of Joshua "Joe" Keogh, Tom Sperring, and Henry Wyeth. The band have released three full-length albums, three mini-albums, and five EPs. Initially called Amber, they later changed their name to avoid conflict with the German dance-pop singer of same name.\n\nFrom Wikipedia (https://en.wikipedia.org/wiki/Amber_Run) under Creative Commons Attribution CC-BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0/legalcode)',
  id: "UCMO-CgAtd1jI2m2CrXcP2sQ",
  thumbnails: [
    {
      height: 225,
      url: "https://lh3.googleusercontent.com/riJWYfHTbHzi3UxA0wV6b6BYSoZIVVub81mZVWGQ4Y5cPbvfdoVHt0FacN4lQg5MWXScsTFbmPHMHw=w540-h225-p-l90-rj",
      width: 540,
    },
    {
      height: 340,
      url: "https://lh3.googleusercontent.com/riJWYfHTbHzi3UxA0wV6b6BYSoZIVVub81mZVWGQ4Y5cPbvfdoVHt0FacN4lQg5MWXScsTFbmPHMHw=w816-h340-p-l90-rj",
      width: 816,
    },
    {
      height: 450,
      url: "https://lh3.googleusercontent.com/riJWYfHTbHzi3UxA0wV6b6BYSoZIVVub81mZVWGQ4Y5cPbvfdoVHt0FacN4lQg5MWXScsTFbmPHMHw=w1080-h450-p-l90-rj",
      width: 1080,
    },
  ],
  title: "Amber Run",
};

export const ALBUMS: any[] = [
  {
    browse_id: "MPREb_th07pqb2TjY",
    playlist_id: "OLAK5uy_kcdbhzuELqhCDKGCFPtxONZJaf06qQ8p4",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/U2yEXQEwNWJf_2eXAQ8ds733xnc8SlTDVPMVxrYXznJJ_BI5X-_p77FVLieurtIdEyYL6UaWX_nfIDjj=w226-h226-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/U2yEXQEwNWJf_2eXAQ8ds733xnc8SlTDVPMVxrYXznJJ_BI5X-_p77FVLieurtIdEyYL6UaWX_nfIDjj=w544-h544-l90-rj",
        width: 544,
      },
    ],
    title: "Our Bright Future",
    type: "Album",
    year: 2008,
  },
  {
    browse_id: "MPREb_IwnpuMBE3Gk",
    playlist_id: "OLAK5uy_kStA9w0a47kAGmPECoI5zfRpCdgLu886I",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/msVTYiqSPVeK-HW4CUomskbYdogHyOXxzcKzR1y0AJfsfagTQzK3JV_9vEoSGASprL2vnJiLiErQQQwX=w226-h226-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/msVTYiqSPVeK-HW4CUomskbYdogHyOXxzcKzR1y0AJfsfagTQzK3JV_9vEoSGASprL2vnJiLiErQQQwX=w544-h544-l90-rj",
        width: 544,
      },
    ],
    title: "Where You Live",
    type: "Album",
    year: 2005,
  },
  {
    browse_id: "MPREb_1StFyeyYPyR",
    playlist_id: "OLAK5uy_nKtpHjJg62EJh7pSlzbGrAf4UeIlEHYn4",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/0_wKYVEFVB4hx5htwltZ_8B5CL0LywAIYTcIik2OMXhbhCq2_G6vEUgL8e7U9ygcSbbrV8LQhu3lvIm1=w226-h226-s-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/0_wKYVEFVB4hx5htwltZ_8B5CL0LywAIYTcIik2OMXhbhCq2_G6vEUgL8e7U9ygcSbbrV8LQhu3lvIm1=w544-h544-s-l90-rj",
        width: 544,
      },
    ],
    title: "Let It Rain",
    type: "Album",
    year: 2002,
  },
  {
    browse_id: "MPREb_UcTT3fu5jJM",
    playlist_id: "OLAK5uy_kuAtFSU2gcRWNohNMvVF-vXFhcqr1fmW0",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/xAL7D1xILGEK1bvc3GNSVq7btXeGfZNHncN6-MP1NZkIi3_26zMm3zLsxaxtOkIRy7s2Wfu6yXa9sZRm=w226-h226-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/xAL7D1xILGEK1bvc3GNSVq7btXeGfZNHncN6-MP1NZkIi3_26zMm3zLsxaxtOkIRy7s2Wfu6yXa9sZRm=w544-h544-l90-rj",
        width: 544,
      },
    ],
    title: "Telling Stories",
    type: "Album",
    year: 2000,
  },
  {
    browse_id: "MPREb_4Hlpl9bIS3q",
    playlist_id: "OLAK5uy_kuFdlbNj9YAc-Q7TBq-XaSxdcoRSU37zo",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/QzHsvqkt0wkzQDLgDRfQJB8s1lX_wwi1l6bg-A3kT2RUAaPmNz2Ld4sfEnNeYHXfrN-gWoYu8fSI5Jd6=w226-h226-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/QzHsvqkt0wkzQDLgDRfQJB8s1lX_wwi1l6bg-A3kT2RUAaPmNz2Ld4sfEnNeYHXfrN-gWoYu8fSI5Jd6=w544-h544-l90-rj",
        width: 544,
      },
    ],
    title: "New Beginning",
    type: "Album",
    year: 1995,
  },
  {
    browse_id: "MPREb_i6ggka60Rdm",
    playlist_id: "OLAK5uy_nwALk4nZSe8w1UH1YQtdEv3Bd33KU__CE",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/YuxIUiVDcbG0BRI3qtEtTW_9iZjon3gEHvHeYyTwHEPeP2_OtEPYfAEWeAy34lsDmyRfZV0uoY9kxgo=w226-h226-s-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/YuxIUiVDcbG0BRI3qtEtTW_9iZjon3gEHvHeYyTwHEPeP2_OtEPYfAEWeAy34lsDmyRfZV0uoY9kxgo=w544-h544-s-l90-rj",
        width: 544,
      },
    ],
    title: "Matters of the Heart",
    type: "Album",
    year: 1992,
  },
  {
    browse_id: "MPREb_pRdIzosnO6H",
    playlist_id: "OLAK5uy_nCOV9UrhGG7vp00wjpRYcbJmpC-SUOM_o",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/tzV_q3BP7G4RWc4UtpjySGiuJMNiA3g541uGiuL7okPk_McvoarD20KZ8ChbbRpWqMWcY2gkhDKmCmBI=w226-h226-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/tzV_q3BP7G4RWc4UtpjySGiuJMNiA3g541uGiuL7okPk_McvoarD20KZ8ChbbRpWqMWcY2gkhDKmCmBI=w544-h544-l90-rj",
        width: 544,
      },
    ],
    title: "Crossroads",
    type: "Album",
    year: 1989,
  },
  {
    browse_id: "MPREb_vKX5oVsmqCd",
    playlist_id: "OLAK5uy_kOlULPsnRbEXhiXK0WWAbxacxQMWKkiOM",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/jSJEaapMpHbcIqKi_GaswiE-UJW39CNtmoAsDaNdLorY0hSid3yuiRtTc2ROw4dAqUqVojVzpKWVvpPhvQ=w226-h226-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/jSJEaapMpHbcIqKi_GaswiE-UJW39CNtmoAsDaNdLorY0hSid3yuiRtTc2ROw4dAqUqVojVzpKWVvpPhvQ=w544-h544-l90-rj",
        width: 544,
      },
    ],
    title: "Tracy Chapman",
    type: "Album",
    year: 1988,
  },
  {
    browse_id: "MPREb_sJxhUyhllaG",
    playlist_id: "OLAK5uy_nntStSJ8IEYMSobBCBKZmXTtx-A1hmWBI",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/BGkdZjXaFe6RklPhdM6YZ92nJiIioIXKbXNfkyKLOp1OloabY2deNwl-9HYvBp6mCpYyV0MawHy-caHH=w226-h226-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/BGkdZjXaFe6RklPhdM6YZ92nJiIioIXKbXNfkyKLOp1OloabY2deNwl-9HYvBp6mCpYyV0MawHy-caHH=w544-h544-l90-rj",
        width: 544,
      },
    ],
    title: "Montreux 1988",
    type: "Album",
    year: 2023,
  },
  {
    browse_id: "MPREb_5GikwGBg2Hk",
    playlist_id: "OLAK5uy_lz245LFfXyc8P1JBuDDM1VbsDq4R2dUig",
    thumbnails: [
      {
        height: 226,
        url: "https://lh3.googleusercontent.com/oggW-gB9_NoGD9Voz1skodBQfFDKEyJNIXv8k-vEOliiLaUVQf9_mZPcprqbdeSRfvYnzDEZ6BZGYaen=w226-h226-l90-rj",
        width: 226,
      },
      {
        height: 544,
        url: "https://lh3.googleusercontent.com/oggW-gB9_NoGD9Voz1skodBQfFDKEyJNIXv8k-vEOliiLaUVQf9_mZPcprqbdeSRfvYnzDEZ6BZGYaen=w544-h544-l90-rj",
        width: 544,
      },
    ],
    title: "Greatest Hits",
    type: "Album",
    year: 2015,
  },
];
