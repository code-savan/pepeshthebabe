"use client";

import {
  Star,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MessageCircle,
  ExternalLink,
  Phone,
  MapPin,
  Calendar,
  Award,
  Users,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Globe,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

const reviews = [
  {
    name: "Adaobi N.",
    review: "Patience made the visa process so smooth! I'm now studying in the UK thanks to her expertise.",
    stars: 5,
  },
  {
    name: "Chinedu O.",
    review: "Her guidance was invaluable. I got into my dream school without any stress!",
    stars: 5,
  },
  {
    name: "Fatima A.",
    review: "Patience is a lifesaver! She handled everything from admissions to visa processing.",
    stars: 5,
  },
  {
    name: "Emeka P.",
    review: "Her attention to detail is unmatched. I highly recommend her services!",
    stars: 5,
  },
  {
    name: "Zainab K.",
    review: "Thanks to Patience, I'm now pursuing my degree in Canada. She's the best!",
    stars: 5,
  },
  {
    name: "Tunde L.",
    review: "Her expertise in visa applications is incredible. I got my visa in record time!",
    stars: 5,
  },
  {
    name: "Grace M.",
    review: "Patience is professional, kind, and highly skilled. I couldn't have done it without her!",
    stars: 5,
  },
  {
    name: "Ibrahim S.",
    review: "She made studying abroad a reality for me. I'm forever grateful!",
    stars: 5,
  },
];

// const apps = [
//   {
//     name: "Poppo",
//     description: "Connect with me on Poppo for live gaming sessions and fun interactions!",
//     refLink: "https://poppo.app/patience",
//     about: "As a passionate gamer, I love connecting with people through Poppo. It's a fantastic platform where I host regular gaming sessions, share tips and tricks, and build a community of fellow gaming enthusiasts. Join me for some exciting gameplay and friendly competition!",
//     screenshots: [
//       "/1.webp",
//       "/2.webp",
//       "/3.webp",
//       "/4.webp",
//     ],
//   },
//   {
//     name: "Nicki",
//     description: "Join me on Nicki for exclusive content and live streams!",
//     refLink: "https://nicki.app/patience",
//     about: "On Nicki, I share my journey in international education consulting, behind-the-scenes looks at the visa application process, and host live Q&A sessions. It's a great way to learn more about studying abroad while earning rewards through the platform.",
//     screenshots: [
//       "https://images.unsplash.com/photo-1616469829484-2d98fa796b61?auto=format&fit=crop&q=80",
//       "https://images.unsplash.com/photo-1616469829941-d63c84a44642?auto=format&fit=crop&q=80",
//       "https://images.unsplash.com/photo-1616469828462-3e635d09d7ea?auto=format&fit=crop&q=80",
//       "https://images.unsplash.com/photo-1616469829581-73886d59bc73?auto=format&fit=crop&q=80",
//     ],
//   },
// ];

const apps = [
    {
      name: "Poppo",
      description: "Connect with me on Poppo for live gaming sessions and fun interactions!",
      refLink: "https://poppo.app/patience",
      about: "As a passionate gamer, I love connecting with people through Poppo. It's a fantastic platform where I host regular gaming sessions, share tips and tricks, and build a community of fellow gaming enthusiasts. Join me for some exciting gameplay and friendly competition!",
      screenshots: [
        "/1.webp",
        "/2.webp",
        "/3.webp",
        "/4.webp",
        "/5.webp",
      ],
    },
    {
      name: "Nicki",
      description: "Join me on Nicki for exclusive content and live streams!",
      refLink: "https://nicki.app/patience",
      about: "On Nicki, I share my journey in international education consulting, behind-the-scenes looks at the visa application process, and host live Q&A sessions. It's a great way to learn more about studying abroad while earning rewards through the platform.",
      screenshots: [
        "/n1.webp",
        "/n2.webp",
        "/n3.webp",
        "/n4.webp",
        "/n5.webp",
      ],
    },
  ];

  const AppCarousel = ({ app }) => {
    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4); // Default to 4 slides

    // Update slidesToShow based on screen width
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 430) {
          setSlidesToShow(1); // 1 slide on mobile
        } else {
          setSlidesToShow(4); // 4 slides on desktop
        }
      };

      // Set initial value
      handleResize();

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate the total number of slides
    const totalSlides = app.screenshots.length;

    // Check if we can move to the next or previous slide
    const canGoNext = currentScreenshotIndex + slidesToShow < totalSlides;
    const canGoPrev = currentScreenshotIndex > 0;

    const nextScreenshot = () => {
      if (canGoNext) {
        setCurrentScreenshotIndex((prev) => prev + 1);
      }
    };

    const prevScreenshot = () => {
      if (canGoPrev) {
        setCurrentScreenshotIndex((prev) => prev - 1);
      }
    };

    return (
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={prevScreenshot}
          disabled={!canGoPrev}
          className={`carousel-button prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 ${
            !canGoPrev ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentScreenshotIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {app.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100%-1rem)] h-fit md:w-[calc(25%-1rem)] rounded-3xl overflow-hidden border-8 border-black bg-black"
              >
                <img
                  src={screenshot}
                  alt={`${app.name} Screenshot ${index + 1}`}
                  className="w-full md:h-fit h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextScreenshot}
          disabled={!canGoNext}
          className={`carousel-button next absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 ${
            !canGoNext ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    );
  };

  const AppSection = ({ app }) => {
    return (
      <div className="gradient-border mb-12">
        <Card className="bg-background/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{app.name}</CardTitle>
            <CardDescription className="text-lg">{app.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">{app.about}</p>
            <AppCarousel app={app} />
            <Button className="w-full" asChild>
              <a href={app.refLink} target="_blank" rel="noopener noreferrer">
                Connect on {app.name}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };


const stats = [
  { icon: Users, label: "Students Helped", value: "500+" },
  { icon: Award, label: "Success Rate", value: "100%" },
  { icon: GraduationCap, label: "Universities", value: "50+" },
  { icon: Briefcase, label: "Years Experience", value: "7+" },
];

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 2);
    return () => clearInterval(intervalId);
  }, []);

  const nextApp = () => {
    setCurrentAppIndex((prev) => (prev + 1) % apps.length);
  };

  const prevApp = () => {
    setCurrentAppIndex((prev) => (prev - 1 + apps.length) % apps.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[url('/hero.png')] bg-cover bg-center w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="mx-auto w-fit md:mx-0">

              <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
                Welcome to My Portfolio
              </Badge>
                </div>
              <h1 className="text-[42px] md:text-6xl font-bold text-white md:mb-6 mb-0 font-montserrat leading-tight text-center md:text-left">
               I'm Patience Ikpor
              </h1>
              <h2 className="text-[22px] md:text-3xl text-white/90 md:mb-4 mb-1 text-center md:text-left">
                Senior Manager at BritishAUC
              </h2>
              <p className="text-xl text-white/80 mb-8 italic max-w-xl text-center md:text-left">
                "Empowering Dreams, One Student at a Time"
              </p>
              <div className="md:flex gap-4 flex-none">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full md:w-fit mb-3 md:mb-0">
                  Explore My Work
                </Button>
                <Button size="lg" variant="outline" className="text-slate-800 border-white hover:bg-white/10 bg-white w-full md:w-fit">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardHeader>
                      <stat.icon className="w-8 h-8 text-primary mb-2" />
                      <CardTitle className="text-white">{stat.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="md:py-24 py-12 px-4 bg-background corner-gradient-tr w-full">
        <div className="md:max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="sticky top-8">
                <div className="relative rounded-2xl overflow-hidden mb-6">
                  <img
                    src="/about.png"
                    alt="Patience Ikpor"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex gap-4 justify-center w-fit md:w-full">
                  {[Linkedin, Twitter, Instagram, Mail].map((Icon, index) => (
                    <Button key={index} size="icon" variant="outline" className="rounded-lg border-slate-300">
                      <Icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  As a Senior Manager at BritishAUC, I lead a premier consultancy in Nigeria dedicated to helping high school students achieve their dreams of studying abroad. With over 7 years of expertise in visa application success, I've helped countless students navigate their educational journey.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  At BritishAUC, we provide end-to-end services including consulting, admissions, and visa processing. What sets us apart is our unique commission-based model - parents don't pay a dime for our services.
                </p>
              </div>
              <div className="md:grid grid-cols-2 gap-4 mt-8">
                <Card className="bg-primary/5 border-primary/20 shadow-sm py-0 h-auto mb-3 md:mb-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 ">
                      <Award className="w-5 h-5 text-primary" />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl md:text-3xl font-semibold md:font-bold">7+ Years</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Success Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl md:text-3xl font-semibold md:font-bold">100%</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="md:py-24 py-12 px-4 bg-secondary ">
        <div className="md:max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
          <div className="md:grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Visa Application Assistance",
                description: "Expert guidance through the visa application process with a proven track record of success.",
              },
              {
                icon: Briefcase,
                title: "Student Admission Consulting",
                description: "Personalized support in selecting and applying to the right universities abroad.",
              },
              {
                icon: Users,
                title: "End-to-End Study Abroad Support",
                description: "Comprehensive assistance from university selection to arrival in your destination country.",
              },
            ].map((service, index) => (
              <div key={index} className="mb-2 md:mb-0">
                <Card className="group hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-md">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="md:py-24 py-12 px-4 bg-background overflow-hidden corner-gradient-tr">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Testimonials
          </h2>
          <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-6" style={{ scrollBehavior: "smooth" }}>
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="gradient-border w-full md:max-w-[380px] flex-shrink-0">
                <Card className="review-card bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-primary">{review.name}</span>
                      <div className="flex">
                        {Array.from({ length: review.stars }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.review}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming Apps Section */}
      <section className="md:py-24 py-12 px-4 bg-secondary corner-gradient-bl">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <Globe className="w-8 h-8 text-primary" />
            </div>
          <h2 className="text-4xl font-bold text-center mb-6">Let's Connect</h2>
          <div className="mb-12 text-center md:max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Beyond helping students achieve their dreams, I'm passionate about gaming and connecting with people globally. Through platforms like Poppo and Nicki, I've built vibrant communities where I share my experiences, host live sessions, and engage with followers while earning through content creation.
            </p>
          </div>

          {apps.map((app, index) => (
          <AppSection key={index} app={app} />
        ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="md:py-24 py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+234 123 456 7890</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => {
                          navigator.clipboard.writeText("patience@britishauc.com");
                        }}
                      >
                        patience@britishauc.com
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to copy email</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Abuja, Nigeria</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center gap-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            ].map((social, index) => (
              <Button key={index} variant="ghost" size="icon" asChild>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="md:py-24 py-12 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">BritishAUC</h3>
            <Separator className="mb-4" />
            <p className="text-sm text-muted-foreground">
              © 2024 BritishAUC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      {showWhatsApp && (
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed md:bottom-8 md:left-8 bottom-4 left-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      )}
    </main>
  );
}
