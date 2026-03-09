import faviconlogo from "@/assets/favicon.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { getHoroscope } from "@/redux/slice/HoroscopesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Footer = () => {
  const { horoscope } = useSelector((state) => state.horoscope);
  const [horosType, setHorosType] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!horoscope) {
      dispatch(getHoroscope());
    }
  }, [horoscope, dispatch]);

  useEffect(() => {
    if (horoscope?.length > 0) {
      const set = new Set();
      const list = [];

      horoscope.forEach((ele) => {
        if (ele.type && !set.has(ele.type)) {
          if (ele.type.toLowerCase() === "weekly") return;

          set.add(ele.type);

          list.push({
            label:
              ele.type.charAt(0).toUpperCase() +
              ele.type.slice(1) +
              " Horoscope",
            path: `/staticHoroschopes/${ele.type.toLowerCase()}`,
          });
        }
      });

      setHorosType(list);
    }
  }, [horoscope]);

  return (
    <footer className="bg-gradient-to-b from-yellow-100 to-yellow-200 text-black pt-10">
      <div className="container">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10 pb-12">
          {/* ABOUT */}
          <div>
            <Link to="/">
              <img src={faviconlogo} className="h-12 mb-4" alt="" />
            </Link>

            <p className="text-sm leading-relaxed">
              AstroTring offers accurate Vedic astrology insights including
              kundli matching, horoscope predictions, and expert astrologer
              consultations to guide important life decisions. Our platform
              blends ancient astrological wisdom with modern technology to
              provide guidance on love, marriage, career, health, and finance.
            </p>
          </div>

          {/* HOROSCOPE */}
          <div>
            <h4 className="font-semibold text-lg border-b border-yellow-500 pb-1 inline-block">
              Horoscope
            </h4>

            <ul className="mt-4 space-y-2">
              {horosType.map((horos) => (
                <li key={horos.path}>
                  <Link
                    to={horos.path}
                    className="flex items-center gap-2 text-sm transition-all duration-200 hover:text-primary hover:translate-x-1"
                  >
                    <FaAnglesRight />
                    {horos.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SHUBH MUHURAT */}
          <div>
            <h4 className="font-semibold text-lg border-b border-yellow-500 pb-1 inline-block">
              Shubh Muhurat {new Date().getFullYear()}
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/annanprashan-muhurat"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Annanprashan Muhurat
                </Link>
              </li>

              <li>
                <Link
                  to="/aamkaran-muhurat"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Naamkaran Muhurat
                </Link>
              </li>

              <li>
                <Link
                  to="/car-bike-muhurat"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Car/Bike Muhurat
                </Link>
              </li>

              <li>
                <Link
                  to="/marriage-muhurat"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Marriage Muhurat
                </Link>
              </li>

              <li>
                <Link
                  to="/bhumiPuja-muhurat"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Bhoomi Pujan Muhurat
                </Link>
              </li>

              <li>
                <Link
                  to="/griha-pravesh-muhurat"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Griha Pravesh Muhurat
                </Link>
              </li>

              <li>
                <Link
                  to="/mundan-muhurat"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Mundan Muhurat
                </Link>
              </li>
            </ul>
          </div>

          {/* ASTROLOGER + CORPORATE */}
          <div>
            <h4 className="font-semibold text-lg border-b border-yellow-500 pb-1 inline-block">
              Astrologer
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/astro-login"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Astrologer Login
                </Link>
              </li>

              <li>
                <Link
                  to="/astro-register"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Astrologer Registration
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Astrology Blogs
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold text-lg border-b border-yellow-500 pb-1 inline-block mt-6">
              Corporate Info
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/refund-policy"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Refund & Cancellation
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-conditions"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/disclaimer"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Disclaimer
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing-policy"
                  className="flex items-center gap-2 hover:text-primary hover:translate-x-1 transition"
                >
                  <FaAnglesRight /> Pricing Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-lg border-b border-yellow-500 pb-1 inline-block">
              Contact Us
            </h4>

            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="size-8 border border-gray-400 p-1.5 rounded-full shrink-0" />
                <span>
                  711, Plot A09, ITL Towers, Netaji Subhash Place, Pitampura,
                  Delhi 110034
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="size-8 border border-gray-400 p-1.5 rounded-full shrink-0" />
                reachus@krayons.co.in
              </li>

              <li className="flex items-center gap-3">
                <Phone className="size-8 border border-gray-400 p-1.5 rounded-full shrink-0" />
                +91 23465 12356
              </li>
            </ul>

            {/* SOCIAL ICONS */}

            <div className="flex gap-3 mt-6">
              <div className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                <TiSocialFacebook size={18} />
              </div>

              <div className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                <SlSocialInstagram size={18} />
              </div>

              <div className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                <TiSocialTwitter size={18} />
              </div>

              <div className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                <TiSocialYoutube size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-center text-black py-4">
        © {new Date().getFullYear()} Astrotring. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
