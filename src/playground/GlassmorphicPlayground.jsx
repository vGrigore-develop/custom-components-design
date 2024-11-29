import { useState } from "react";
import GlassmorphicBackground from "./GlassmorphicBackground";
import {
  GlassmorphicBadge,
  GlassmorphicButton,
  GlassmorphicCard,
  GlassmorphicCheckbox,
  GlassmorphicInput,
  GlassmorphicModal,
  GlassmorphicSelect,
  GlassmorphicSlider
} from "../components/glassmorphism";

const GlassmorphicPlayground = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("option1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: true,
    option3: false
  });
  const [sliderValue, setSliderValue] = useState(50);

  const handleCheckboxChange = (name) => {
    setCheckboxes(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 py-16">
      <GlassmorphicBackground />

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Glassmorphism Playground
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Glass Card
            </h2>
            <GlassmorphicCard>
              <h3 className="text-xl font-semibold text-white mb-2">
                Subtle Glass Effect
              </h3>
              <p className="text-white/90">
                Notice how the background patterns and animations show through
                the frosted glass surface, creating depth and visual interest.
              </p>
            </GlassmorphicCard>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Form Elements
            </h2>
            <GlassmorphicCard>
              <div className="space-y-4">
                <GlassmorphicInput
                  placeholder="Enter something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <GlassmorphicSelect
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </GlassmorphicSelect>

                <div className="flex flex-wrap gap-2">
                  <GlassmorphicBadge>New</GlassmorphicBadge>
                  <GlassmorphicBadge>Featured</GlassmorphicBadge>
                  <GlassmorphicBadge>Premium</GlassmorphicBadge>
                </div>
              </div>
            </GlassmorphicCard>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Checkboxes
            </h2>
            <GlassmorphicCard>
              <div className="flex flex-col space-y-4">
                <GlassmorphicCheckbox
                  className="w-full"
                  checked={checkboxes.option1}
                  onChange={() => handleCheckboxChange("option1")}
                  label="Default Checkbox"
                />

                <GlassmorphicCheckbox
                  className="w-full"
                  checked={checkboxes.option2}
                  onChange={() => handleCheckboxChange("option2")}
                  label="Checked by Default"
                />

                <GlassmorphicCheckbox
                  className="w-full"
                  checked={checkboxes.option3}
                  onChange={() => handleCheckboxChange("option3")}
                  label="With Long Label Text"
                />

                <GlassmorphicCheckbox
                  className="w-full"
                  checked={false}
                  onChange={() => {}}
                  label="Disabled Checkbox"
                  disabled
                />
              </div>
            </GlassmorphicCard>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Interactive Elements
            </h2>
            <GlassmorphicCard>
              <div className="flex flex-col gap-6">
                <GlassmorphicButton
                  onClick={() => alert("Glass button clicked!")}
                >
                  Simple Button
                </GlassmorphicButton>

                <GlassmorphicButton onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </GlassmorphicButton>
              </div>
            </GlassmorphicCard>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Slider Controls
            </h2>
            <GlassmorphicCard>
              <div className="space-y-8">
                <GlassmorphicSlider
                  label="Basic Slider"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                />

                <GlassmorphicSlider
                  label="Disabled Slider"
                  value={75}
                  onChange={() => {}}
                  disabled
                />
              </div>
            </GlassmorphicCard>
          </section>
        </div>

        <GlassmorphicModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Glassmorphic Modal
          </h3>
          <p className="text-white/90 mb-4">
            This is a modal with the same glassmorphic effect. Click outside or
            the button below to close.
          </p>
          <GlassmorphicButton onClick={() => setIsModalOpen(false)}>
            Close Modal
          </GlassmorphicButton>
        </GlassmorphicModal>
      </div>
    </div>
  );
};

export default GlassmorphicPlayground;
