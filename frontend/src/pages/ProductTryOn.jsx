import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { CiLink } from "react-icons/ci";
import p1 from "../assets/garmets/p1.png";
import p2 from "../assets/garmets/p2.png";
import p3 from "../assets/garmets/p3.png";
import p4 from "../assets/garmets/p4.png";
import ProductSlider from "../components/ProductSlider";

const PRODUCTS = {
  1: p1,
  2: p2,
  3: p3,
  4: p4,
};

function ProductTryOn() {
  const { id } = useParams();
  const productImg = PRODUCTS[id];
  const [userImg, setUserImg] = useState(null);
  const [userUrl, setUserUrl] = useState(null);
  const [resultUrl, setResultUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  console.log(userImg);
  const tryOn = async (garmentImage = productImg) => {
    if (!userImg) return alert("Upload your photo first");
    setVisible(false);
    setLoading(true);
    const form = new FormData();
    form.append("avatar_image", userImg);

    const garmentBlob = await fetch(garmentImage).then((r) => r.blob());
    form.append("clothing_image", garmentBlob, "garment.png");

    const res = await fetch(
      "https://try-on-diffusion.p.rapidapi.com/try-on-file",
      {
        method: "POST",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "try-on-diffusion.p.rapidapi.com",
          // Don't set Content-Type manually when using FormData
        },
        body: form,
      }
    );

    const blob = await res.blob();
    const imageURL = URL.createObjectURL(blob);
    setResultUrl(imageURL);
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center px-10 items-center gap-10 h-full sm:h-[60vh] pt-[5rem] sm:pt-[10rem]">
      {visible && <div className="bor">
        <div className="flex flex-col sm:flex-row w-auto  sm:w-[500px] h-full justify-between relative items-center ">
          <img className="w-[200px] h-[200px]" src={productImg} alt="product" />
          <CiLink className="text-5xl" />
          <label
            className=" w-[200px] h-[200px] bg-zinc-200 text-zinc-600 border-1 border-dashed flex justify-center items-center cursor-pointer flex-col"
            htmlFor="image"
          >
            {!userUrl ? (
              <>
                <CiCirclePlus className="text-4xl" />
                <p>ADD YOUR IMAGE</p>
              </>
            ) : (
              <img
                className="w-full h-full object-cover"
                src={userUrl}
                alt="img"
              />
            )}
          </label>
          <input
            id="image"
            className="hidden"
            type="file"
            onChange={(e) => {
              setUserImg(e.target.files[0]);
              setUserUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </div>

        <div className="flex justify-center">
          {!resultUrl && (
            <button
              disabled={!userImg}
              className={`${
                userImg
                  ? "bg-black cursor-pointer"
                  : "bg-zinc-300 cursor-not-allowed"
              } text-white p-2 mt-3`}
              onClick={() => tryOn()}
            >
              Click to Generate
            </button>
          )}
        </div>
      </div>}
      <div className="w-auto">
        {loading && (
          <div className="bg-zinc-100 h-[50vh] w-60  sm:h-[60vh] sm:w-[400px]">
            <p>Processing...</p>
          </div>
        )}
        {resultUrl && !loading && (
          <img
            className="h-[50vh] sm:h-[60vh] sm:w-[400px] borer-1 border-red-500"
            src={resultUrl}
            alt="result"
          />
        )}
      </div>

      {!visible && (
        <ProductSlider userImg={userImg} tryOn={tryOn} excludeId={id} />
      )}
    </div>
  );
}

export default ProductTryOn;
