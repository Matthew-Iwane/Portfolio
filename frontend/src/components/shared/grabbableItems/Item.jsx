import { useMotionValue, Reorder, useDragControls, motion } from "framer-motion";
import { ReorderIcon } from "./Icon";

const ItemVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  }
}

export const Item = ({ item }) => {
  const y = useMotionValue(0);
  const dragControls = useDragControls();

  return (
    <motion.div
      whileHover={{scale:1.1}}
      variants={ItemVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    >
      <Reorder.Item
        value={item}
        id={item}
        style={{y }}
        dragListener={false}
        dragControls={dragControls}
      >
        <span>{item}</span>
        <div id="grab-svg">
          <ReorderIcon dragControls={dragControls} />
        </div>
        
      </Reorder.Item>
    </motion.div>
  );
};
