"use client"
import Animes from "@/components/Animes/Animes";
import axios from "axios";
import fileDownload from "js-file-download";

export default function Home() {
  const handleDownload = () => {
    // window.location.href = `http://localhost:8000/api/download?url=${encodeURIComponent()}`;
    axios({
        url: 'https://r260302.yandexwebcache.org/fullmetal-alchemist/1/1.360.16b1b4c047f48579.mp4?hash1=2dba1ce49cc9b661c070c5c3f687da6a&hash2=a4d4ad1e550843f1f37bbcaf8a26f97f',
        method: 'GET',
        responseType: 'blob', // Important
        headers: {
            "Content-Disposition": "attachment;filename=report.xls",
            "Content-Type": "application/octet-stream" // or "application/vnd.ms-excel"
          }
      }).then((response) => {
          fileDownload(response.data, 'report.csv');
      });
}
  return (
    <div className="max-w-[1300px] m-auto mt-[129px]">
                <button onClick={handleDownload}>download</button>

      {/* <Animes /> */}
    </div>
  );
}
