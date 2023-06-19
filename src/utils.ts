type Position = {
  x: number;
  y: number;
};

export function getDirection(
  current: Position,
  refer: Position,
  threshold: number
) {
  const referX = current.x - refer.x;
  const referY = current.y - refer.y;
  const isOver = Math.abs(referY / referX) >= threshold;

  return TEXT[
    isOver ? (referY >= 0 ? "bottom" : "top") : referX >= 0 ? "right" : "left"
  ];
}

export const TEXT = {
  top: "上",
  right: "右",
  bottom: "下",
  left: "左",
} as const;
