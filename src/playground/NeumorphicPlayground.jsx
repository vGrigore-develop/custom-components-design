import { useState } from "react";
import {
  NeumorphicBadge,
  NeumorphicButton,
  NeumorphicCard,
  NeumorphicCheckbox,
  NeumorphicInput,
  NeumorphicModal,
  NeumorphicSelect,
  NeumorphicSlider,
} from "../components/neumorphic";

const NeumorphicPlayground = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("option1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: true,
    option3: false,
  });
  const [sliderValue, setSliderValue] = useState(50);

  const handleCheckboxChange = (name) => {
    setCheckboxes((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="min-h-screen bg-[#E0E5EC] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-neutral-800 mb-12 text-center">
          Neumorphic Design
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              Neumorphic Card
            </h2>
            <NeumorphicCard>
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                Soft UI Effect
              </h3>
              <p className="text-neutral-600">
                Notice the subtle shadows creating a raised effect against the
                neutral background. The squircle corners provide a modern touch.
              </p>
            </NeumorphicCard>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              Form Elements
            </h2>
            <NeumorphicCard>
              <div className="space-y-4">
                <NeumorphicInput
                  placeholder="Enter something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <NeumorphicSelect
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </NeumorphicSelect>

                <div className="flex flex-wrap gap-2">
                  <NeumorphicBadge>New</NeumorphicBadge>
                  <NeumorphicBadge>Featured</NeumorphicBadge>
                  <NeumorphicBadge>Premium</NeumorphicBadge>
                </div>
              </div>
            </NeumorphicCard>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              Checkboxes
            </h2>
            <NeumorphicCard>
              <div className="flex flex-col space-y-4">
                <NeumorphicCheckbox
                  className="w-full"
                  checked={checkboxes.option1}
                  onChange={() => handleCheckboxChange("option1")}
                  label="Default Checkbox"
                />

                <NeumorphicCheckbox
                  className="w-full"
                  checked={checkboxes.option2}
                  onChange={() => handleCheckboxChange("option2")}
                  label="Checked by Default"
                />

                <NeumorphicCheckbox
                  className="w-full"
                  checked={checkboxes.option3}
                  onChange={() => handleCheckboxChange("option3")}
                  label="With Long Label Text"
                />

                <NeumorphicCheckbox
                  className="w-full"
                  checked={false}
                  onChange={() => {}}
                  label="Disabled Checkbox"
                  disabled
                />
              </div>
            </NeumorphicCard>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              Interactive Elements
            </h2>
            <NeumorphicCard>
              <div className="flex flex-col gap-6">
                <NeumorphicButton onClick={() => alert("Button clicked!")}>
                  Default Button
                </NeumorphicButton>

                <NeumorphicButton
                  variant="pressed"
                  onClick={() => alert("Pressed button clicked!")}
                >
                  Pressed Button
                </NeumorphicButton>

                <NeumorphicButton onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </NeumorphicButton>
              </div>
            </NeumorphicCard>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              Slider Controls
            </h2>
            <NeumorphicCard>
              <div className="space-y-8">
                <NeumorphicSlider
                  label="Basic Slider"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                />

                <NeumorphicSlider
                  label="Disabled Slider"
                  value={75}
                  onChange={() => {}}
                  disabled
                />
              </div>
            </NeumorphicCard>
          </section>
        </div>
      </div>

      <NeumorphicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="text-neutral-800">
          <h3 className="text-xl font-semibold mb-4">Neumorphic Modal</h3>
          <p className="mb-4">
            This is a modal with the same neumorphic design style. Click outside
            or the button below to close.
          </p>
          <NeumorphicButton onClick={() => setIsModalOpen(false)}>
            Close Modal
          </NeumorphicButton>
        </div>
      </NeumorphicModal>
    </div>
  );
};

export default NeumorphicPlayground;
