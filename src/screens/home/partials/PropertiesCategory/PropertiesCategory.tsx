import { Avatar, Box, Button, Typography } from "ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { categoryData } from ".";
export const PropertiesCategory = () => {
  return (
    <Box className="mt-3 flex">
      <Swiper
        navigation={true}
        allowTouchMove={false}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={8}
      >
        <Box>
          {categoryData?.map((item) => (
            <SwiperSlide>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    background: "transparent",
                    borderRadius: 0,
                    width: 24,
                    height: 24,
                  }}
                  src={item.svg}
                />
                <Typography sx={{ fontSize: (theme) => theme.spacing(1.5) }}>
                  {item.name}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
      <Button
      variant="outlined"
        startIcon={
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.54144 8.22043H0.541443M2.54144 8.22043C2.54144 8.75086 2.75216 9.25957 3.12723 9.63464C3.5023 10.0097 4.01101 10.2204 4.54144 10.2204C5.07188 10.2204 5.58058 10.0097 5.95566 9.63464C6.33073 9.25957 6.54144 8.75086 6.54144 8.22043M2.54144 8.22043C2.54144 7.69 2.75216 7.18129 3.12723 6.80621C3.5023 6.43114 4.01101 6.22043 4.54144 6.22043C5.07188 6.22043 5.58058 6.43114 5.95566 6.80621C6.33073 7.18129 6.54144 7.69 6.54144 8.22043M13.5414 8.22043H6.54144M13.5414 3.22043H11.5414M11.5414 3.22043C11.5414 3.75086 11.3307 4.25957 10.9557 4.63464C10.5806 5.00971 10.0719 5.22043 9.54144 5.22043C9.01101 5.22043 8.5023 5.00971 8.12723 4.63464C7.75216 4.25957 7.54144 3.75086 7.54144 3.22043M11.5414 3.22043C11.5414 2.69 11.3307 2.18129 10.9557 1.80621C10.5806 1.43114 10.0719 1.22043 9.54144 1.22043C9.01101 1.22043 8.5023 1.43114 8.12723 1.80621C7.75216 2.18129 7.54144 2.69 7.54144 3.22043M7.54144 3.22043H0.541443M13.5414 13.2204H11.5414M11.5414 13.2204C11.5414 13.7509 11.3307 14.2596 10.9557 14.6346C10.5806 15.0097 10.0719 15.2204 9.54144 15.2204C9.01101 15.2204 8.5023 15.0097 8.12723 14.6346C7.75216 14.2596 7.54144 13.7509 7.54144 13.2204M11.5414 13.2204C11.5414 12.69 11.3307 12.1813 10.9557 11.8062C10.5806 11.4311 10.0719 11.2204 9.54144 11.2204C9.01101 11.2204 8.5023 11.4311 8.12723 11.8062C7.75216 12.1813 7.54144 12.69 7.54144 13.2204M7.54144 13.2204H0.541443"
              stroke="#222222"
              stroke-width="1.5"
            />
          </svg>
        }
      >
        Filters
      </Button>
      
    </Box>
  );
};
