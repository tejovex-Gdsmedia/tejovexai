export const transition = {
  duration: 0.8,
};

export const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition
  },
  stagger: {
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }
};
