import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "ui";
import { twMerge } from "tailwind-merge";

export const TopNavItems = () => {
  const items = [
    {
      name: "Stays",
    },
    {
      name: "Experiences",
    },
    {
      name: " Online Experiences",
      path: "",
    },
  ];
  const [changeText, setChangeText] = useState<string>("Stays");
  const Buttons = motion(Button);
  const MotionLink = motion(Link);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["end end","start end"]
  });
  const scale = useTransform(scrollYProgress, [0, .25], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0,.25], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      sx={{
        display: "flex",
        gap: (theme) => theme.spacing(4),
      }}
    >
      <ul className="flex">
        {items?.map((item) => {
          return (
            <motion.li key={item.name}>
              <MotionLink
                className={twMerge(
                  "relative flex transition-all duration-1000 ease-in-out"
                )}
                to={item.name === " Online Experiences" ? "/en/nothing" : ""}
              >
                <Buttons
                  variant="text"
                  onClick={() => setChangeText(item.name)}
                  sx={{
                    color: changeText === item.name ? "#222222" : "#717171",
                    fontWeight: changeText === item.name ? 600 : 0,
                    zIndex: 1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    borderRadius: (theme) => theme.spacing(1.5),
                  }}
                >
                  <Typography
                    sx={{
                      borderBottom:
                        changeText === item.name ? "1px solid #FFFFFF" : "",
                      fontWeight: changeText === item.name ? 600 : 0,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Buttons>
                {changeText === item.name ? (
                  <motion.div
                    transition={{ type: "spring" }}
                    layoutId="underline"
                    style={{ backgroundColor: "#ebebeb" }}
                    className={"absolute w-full h-full top-0 rounded-md"}
                  ></motion.div>
                ) : null}
              </MotionLink>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};
