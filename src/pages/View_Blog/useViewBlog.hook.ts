import { useEffect, useState } from "react";
import { Blog, BlogSection } from "../../models/types/Blog";
import { BlogService } from "../../services/blog";
import { convertSectionTitle } from "../../utils/convertTilteInId";

const initialState: Blog = {
  id: "",
  category: "javascript",
  content: "",
  date: new Date(),
  description: "",
  image: "",
  sections: [],
  title: "",
};

const useViewBlog = (id: Blog["id"]) => {
  const [itemBlog, setItemBlog] = useState<Blog>(initialState);
  const [loading, setLoading] = useState(false);
  const [visibleSection, setVisibleSection] = useState<string>("");

  useEffect(() => {
    const detectarSeccionVisible = () => {
      const sections = document.querySelectorAll("h2");
      let lastSection: string = "";
      sections.forEach((section) => {
        if (section.id) {
          const topSection = section.getBoundingClientRect().top;
          if (topSection < 300) {
            lastSection = section.id;
          }
        }
      });

      setVisibleSection(lastSection);
    };
    window.addEventListener("scroll", detectarSeccionVisible);
    return () => {
      window.removeEventListener("scroll", detectarSeccionVisible);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    BlogService.getItemBlog(id).then((res) => {
      if (res) {
        setLoading(false);
        setItemBlog(res);
      }
    });
  }, [id]);

  useEffect(() => {
    document.title = itemBlog.title;
    return () => {
      document.title = "TinoMaster | Portafolio";
    };
  }, [itemBlog.title]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: itemBlog.title,
          text: itemBlog.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      const el = document.createElement("textarea");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      alert("Link copiado en el portapapeles");
    }
  };

  const ajustScrollBlogNavegation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: BlogSection
  ) => {
    e.preventDefault();
    const target = document.querySelector(
      `#${convertSectionTitle(section.title, section.id)}`
    );
    if (target) {
      const offset = -100; // Ajusta este valor según tus necesidades
      window.scrollTo({
        top: (target as HTMLElement).offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return {
    itemBlog,
    loading,
    ajustScrollBlogNavegation,
    visibleSection,
    handleShare,
  };
};

export default useViewBlog;
