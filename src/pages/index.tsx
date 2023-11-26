import Box from "@mui/joy/Box";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Page() {
  return (
    <Box>
      <Canvas>
        <OrbitControls />
      </Canvas>
    </Box>
  );
}
