import React, { useState } from "react";
import { BsHeart, BsPlay } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import SongList from "./Data";
import "./playlist.css"


// console.log(SongList)

const Playlist = () => {
  // const [songsList, setSongsList] = useState(SongsList)
  // console.log(songsList)
  return (
    <>
      <div className="flex flex-col gap-3 playlistw90vw overflow-auto lg:h-[500px] md:h-[400px] h-[380px] lg:w-[80vw] md:w-[70vw]">
        {/* {SongList.map((songs, i) => {
          return ( */}

        {SongList.map((songs, i) => {
          return (
            <>
              <div className="w-full flex lg:px-5 ">
                <div className="w-[20vw] playlistw lg:w-[15vw] playlist20vw  pr-[10px] pt-2 justify-center items-center  bg-[#8080802e]">
                  <img
                    src="https://freemusicarchive.org/image?file=images%2Falbums%2FSkidmore_College_Orchestra_-_Mussorgskys_Pictures_at_an_Exhibition_-_2009113013701972.jpg&width=290&height=290&type=image"
                    className="h-[40px] flex justify-center items-center  w-[100%] "
                    alt="img..."
                  />
                  <BsPlay className="relative left-[25px] md:left-[44px] lg:left-[55px] top-[-30px] playbutton text-white " />
                </div>
                <div className="w-[70vw] playlist70vw relative  lg:w-[70vw] bg-[#8080802e]">
                  <p className="font-bold text-[12px]">  
                    {songs.title}
                  </p>
                  <p className="text-[10px]">{songs.artistName}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Playlist;
