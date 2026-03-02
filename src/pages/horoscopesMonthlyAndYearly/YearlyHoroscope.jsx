// src/pages/YearlyHoroscope.jsx

import aries from "../../assets/zodiacSigns/aries.png";
import aquarius from "../../assets/zodiacSigns/aquarius.png";
import cancer from "../../assets/zodiacSigns/cancer.png";
import capricorn from "../../assets/zodiacSigns/capricorn.png";
import gemini from "../../assets/zodiacSigns/gemini.png";
import leo from "../../assets/zodiacSigns/leo.png";
import libra from "../../assets/zodiacSigns/libra.png";
import pisces from "../../assets/zodiacSigns/pisces.png";
import sagittarius from "../../assets/zodiacSigns/sagittarius.png";
import scorpio from "../../assets/zodiacSigns/scorpio.png";
import taurus from "../../assets/zodiacSigns/taurus.png";
import virgo from "../../assets/zodiacSigns/virgo.png";

import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getYearlyHoroscope } from "@/data/horoscopesData/horoscopesDataYearly";

const ZODIAC_SIGNS = [
  { name: "aries", display: "Aries", img: aries },
  { name: "taurus", display: "Taurus", img: taurus },
  { name: "gemini", display: "Gemini", img: gemini },
  { name: "cancer", display: "Cancer", img: cancer },
  { name: "leo", display: "Leo", img: leo },
  { name: "virgo", display: "Virgo", img: virgo },
  { name: "libra", display: "Libra", img: libra },
  { name: "scorpio", display: "Scorpio", img: scorpio },
  { name: "sagittarius", display: "Sagittarius", img: sagittarius },
  { name: "capricorn", display: "Capricorn", img: capricorn },
  { name: "aquarius", display: "Aquarius", img: aquarius },
  { name: "pisces", display: "Pisces", img: pisces },
];

const YearlyHoroscope = () => {
  const { zodiac } = useParams();
  const horoscopeData = useMemo(() => getYearlyHoroscope(zodiac), [zodiac]);
  const selectedZodiac = zodiac || "aquarius";

  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#E6A100]">
            2026 Yearly Horoscope
          </h1>
          <div className="w-20 md:w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* GRID LAYOUT SAME AS SERVICE DETAIL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT CONTENT - 8 */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
              {horoscopeData ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                    {horoscopeData.title}
                  </h2>

                  <div className="space-y-6 text-gray-700 leading-8 whitespace-pre-line text-base">
                    {horoscopeData.fullContent}
                  </div>
                </>
              ) : (
                <div className="text-gray-500 text-center py-10">
                  No horoscope data found.
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR - 4 */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-5 space-y-6">
              {/* Zodiac Card */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Zodiac Signs</h3>

                <div className="space-y-3">
                  {ZODIAC_SIGNS.map((sign) => (
                    <Link
                      key={sign.name}
                      to={`/yearly/${sign.name}`}
                      className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                        selectedZodiac === sign.name
                          ? "bg-yellow-100 border-yellow-400"
                          : "border-gray-200 hover:bg-yellow-50"
                      }`}
                    >
                      <img
                        src={sign.img}
                        alt={sign.display}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="font-medium text-gray-800">
                        {sign.display}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA CARD */}
              <div className="bg-yellow-100 rounded-3xl shadow-xl p-6">
                <h4 className="font-semibold text-lg mb-2">
                  Need Personal Kundli Analysis?
                </h4>
                <p className="text-sm mb-4 text-gray-700">
                  Get detailed horoscope consultation from expert astrologers.
                </p>
                <Link
                  to="/talk-to-astrologer"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyHoroscope;
