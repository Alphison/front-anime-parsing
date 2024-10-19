// import { useGetVideos } from "@/services/Animes/hooks/getVideos"
// import { IEpisode } from "@/services/Animes/model"
// import axios from "axios"
// import fileDownload from "js-file-download"
// import Link from "next/link"
// import { FC } from "react"

// type TEpisodeProps = {
//     number: IEpisode['id'],
//     href: string
// }

// const Episode:FC<TEpisodeProps> = ({number, href}) => {
//     const {mutate: getVideos, isPending, data} = useGetVideos()

//     const handleGetVideos = () => {
//         getVideos({href})
//     }

//     const handleDownload = () => {
//         // window.location.href = `http://localhost:8000/api/download?url=${encodeURIComponent()}`;
//         axios({
//             url: 'https://r260302.yandexwebcache.org/fullmetal-alchemist/1/1.360.16b1b4c047f48579.mp4?hash1=2dba1ce49cc9b661c070c5c3f687da6a&hash2=a4d4ad1e550843f1f37bbcaf8a26f97f',
//             method: 'GET',
//             responseType: 'blob', // Important
//             headers: {
//                 "Content-Disposition": "attachment;filename=report.xls",
//                 "Content-Type": "application/octet-stream" // or "application/vnd.ms-excel"
//               }
//           }).then((response) => {
//               fileDownload(response.data, 'report.csv');
//           });
//     }

//     return (
//         <div className="flex flex-col gap-[10px]">
//             <div className="rounded-[25px] w-[120px] h-[120px] flex items-center justify-center bg-black bg-opacity-[0.45] cursor-pointer transition-all duration-300 hover:bg-[#719A5E] hover:bg-opacity-[0.46]" onClick={handleGetVideos}>
//                 <p className="font-bold text-[45px]">{number}</p>
//             </div>            
//             {/* {isPending && <div>Loading...</div>}            
//             <div className="flex p-1 flex-col gap-[5px] bg-[#3d3d3d]">            
//                 {data && data.map(video => (
//                     <div key={video.label} onClick={() => handleDownload(video.src)}>{video.label}
//                     </div>
//                 ))}
//             </div> */}
            
//         </div>
//     )
// }

// export default Episode