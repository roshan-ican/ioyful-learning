import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { isActiveLink } from "../../../utils/linkActiveChecker";

const Sidebar = () => {
  const router = useRouter();

  const sidebarContent = [
    {
      id: 1,
      icon: "/img/dashboard/sidebar/compass.svg",
      name: "Dashboard",
      routePath: "/admin",
    },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/booking.svg",
      name: "Booking History",
      routePath: "/admin/booking-history",
    },
    {
      id: 3,
      icon: "/img/dashboard/sidebar/bookmark.svg",
      name: "Hotels",
      routePath: "/admin/hotels",
    },
    {
      id: 4,
      icon: "/img/dashboard/sidebar/gear.svg",
      name: "Coupons",
      routePath: "/dashboard/db-settings",
    },
    {
      id: 5,
      icon: "/img/dashboard/sidebar/log-out.svg",
      name: " Logout",
      routePath: "/others-pages/login",
    },
  ];
  return (
    <div className="sidebar -dashboard">
      {sidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div
            className={`${
              isActiveLink(item.routePath, router.asPath) ? "-is-active" : ""
            } sidebar__button `}
          >
            <Link
              href={item.routePath}
              className="d-flex items-center text-15 lh-1 fw-500"
            >
              <Image
                width={20}
                height={20}
                src={item.icon}
                alt="image"
                className="mr-15"
              />
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
