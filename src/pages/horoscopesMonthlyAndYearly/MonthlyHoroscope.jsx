import aries from "../../assets/zodiacSigns/aries.png"
import aquarius from "../../assets/zodiacSigns/aquarius.png"
import cancer from "../../assets/zodiacSigns/cancer.png"
import capricorn from "../../assets/zodiacSigns/capricorn.png"
import gemini from "../../assets/zodiacSigns/gemini.png"
import leo from "../../assets/zodiacSigns/leo.png"
import libra from "../../assets/zodiacSigns/libra.png"
import pisces from "../../assets/zodiacSigns/pisces.png"
import sagittarius from "../../assets/zodiacSigns/sagittarius.png"
import scorpio from "../../assets/zodiacSigns/scorpio.png"
import taurus from "../../assets/zodiacSigns/taurus.png"
import virgo from "../../assets/zodiacSigns/virgo.png"





import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMonthlyHoroscope } from "@/data/horoscopesData/horoscopesDataMonthly"




const ZODIAC_SIGNS = [
  { name: 'aries', display: 'Aries', img: aries },
  { name: 'taurus', display: 'Taurus', img: taurus },
  { name: 'gemini', display: 'Gemini', img: gemini },
  { name: 'cancer', display: 'Cancer', img: cancer },
  { name: 'leo', display: 'Leo', img: leo },
  { name: 'virgo', display: 'Virgo', img: virgo },
  { name: 'libra', display: 'Libra', img: libra },
  { name: 'scorpio', display: 'Scorpio', img: scorpio },
  { name: 'sagittarius', display: 'Sagittarius', img: sagittarius },
  { name: 'capricorn', display: 'Capricorn', img: capricorn },
  { name: 'aquarius', display: 'Aquarius', img: aquarius },
  { name: 'pisces', display: 'Pisces', img: pisces }
];

const MonthlyHoroscope = () => {
  const { zodiac } = useParams();
  const horoscopeData = useMemo(() => {
    return getMonthlyHoroscope(zodiac);
  }, [zodiac]);

  const selectedZodiac = zodiac || 'aries';

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">
            March 2026 Monthly Horoscope
          </h1>
          <p className="text-gray-600">
            What the stars have in store for you this month
          </p>
        </div>

        {/* main grid - layout ULTA: details left, signs right */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* LEFT COLUMN - horoscope details (pehle right tha, ab left) */}
          <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 order-2 lg:order-1">
            {horoscopeData ? (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
                  {horoscopeData.title}
                </h2>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {horoscopeData.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* career */}
                  <div className="bg-amber-50/80 p-5 rounded-xl border border-amber-200">
                    <h3 className="text-xl font-semibold text-amber-700 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💼</span> Career
                    </h3>
                    <p className="text-gray-700">{horoscopeData.career}</p>
                    {horoscopeData.favourable_dates?.career && (
                      <div className="mt-3">
                        <span className="text-sm font-medium text-amber-600">Best dates:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {horoscopeData.favourable_dates.career.map(date => (
                            <span key={date} className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm">
                              {date} Mar
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* finance */}
                  <div className="bg-yellow-50/80 p-5 rounded-xl border border-yellow-200">
                    <h3 className="text-xl font-semibold text-yellow-700 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💰</span> Finance
                    </h3>
                    <p className="text-gray-700">{horoscopeData.finance}</p>
                    {horoscopeData.favourable_dates?.finance && (
                      <div className="mt-3">
                        <span className="text-sm font-medium text-yellow-600">Best dates:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {horoscopeData.favourable_dates.finance.map(date => (
                            <span key={date} className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">
                              {date} Mar
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* love */}
                  <div className="bg-orange-50/80 p-5 rounded-xl border border-orange-200">
                    <h3 className="text-xl font-semibold text-orange-600 mb-3 flex items-center gap-2">
                      <span className="text-2xl">❤️</span> Love
                    </h3>
                    <p className="text-gray-700">{horoscopeData.love}</p>
                    {horoscopeData.favourable_dates?.love && (
                      <div className="mt-3">
                        <span className="text-sm font-medium text-orange-600">Best dates:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {horoscopeData.favourable_dates.love.map(date => (
                            <span key={date} className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">
                              {date} Mar
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* health */}
                  <div className="bg-amber-50/80 p-5 rounded-xl border border-amber-200">
                    <h3 className="text-xl font-semibold text-amber-700 mb-3 flex items-center gap-2">
                      <span className="text-2xl">🧘</span> Health
                    </h3>
                    <p className="text-gray-700">{horoscopeData.health}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                No horoscope data found for {zodiac}.
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - zodiac signs (pehle left tha, ab right) */}
          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 h-fit order-1 lg:order-2">
            <h2 className="text-xl font-semibold text-amber-700 mb-4 px-2">
              Zodiac Signs
            </h2>
            <div className="space-y-2">
              {ZODIAC_SIGNS.map((sign) => (
                <Link
                  key={sign.name}
                  to={`/monthly/${sign.name}`}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                    selectedZodiac === sign.name
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'hover:bg-amber-100 text-gray-700'
                  }`}
                >
                  <img 
                    src={sign.img} 
                    alt={sign.display}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <span className="font-medium">{sign.display}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyHoroscope;

























