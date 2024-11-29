import { useState } from 'react';
import {
  NeobrutalismBadge,
  NeobrutalismButton,
  NeobrutalismCard,
  NeobrutalismCheckbox,
  NeobrutalismInput,
  NeobrutalismModal,
  NeobrutalismSelect,
  NeobrutalismSlider
} from '../components/neobrutalism';

const NeobrutalismPlayground = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('option1');
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
    <div className="min-h-screen bg-orange-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black text-black mb-12 text-center rotate-1">
          NEOBRUTALISM DESIGN
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 -rotate-1">
              Neobrutalism Card
            </h2>
            <NeobrutalismCard>
              <h3 className="text-xl font-bold text-black mb-2">
                Bold UI Effect
              </h3>
              <p className="text-black">
                Notice the thick borders and harsh shadows creating a bold effect.
                The chunky corners and solid colors are signature Neobrutalism characteristics.
              </p>
            </NeobrutalismCard>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4 rotate-1">
              Form Elements
            </h2>
            <NeobrutalismCard className="bg-violet-300">
              <div className="space-y-4">
                <NeobrutalismInput
                  placeholder="Enter something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <NeobrutalismSelect
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </NeobrutalismSelect>

                <div className="flex flex-wrap gap-2">
                  <NeobrutalismBadge>New</NeobrutalismBadge>
                  <NeobrutalismBadge>Featured</NeobrutalismBadge>
                  <NeobrutalismBadge>Premium</NeobrutalismBadge>
                </div>
              </div>
            </NeobrutalismCard>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4 -rotate-2">
              Checkboxes
            </h2>
            <NeobrutalismCard className="bg-yellow-300">
              <div className="flex flex-col space-y-4">
                <NeobrutalismCheckbox
                  checked={checkboxes.option1}
                  onChange={() => handleCheckboxChange('option1')}
                  label="Default Checkbox"
                />

                <NeobrutalismCheckbox
                  checked={checkboxes.option2}
                  onChange={() => handleCheckboxChange('option2')}
                  label="Checked by Default"
                />

                <NeobrutalismCheckbox
                  checked={checkboxes.option3}
                  onChange={() => handleCheckboxChange('option3')}
                  label="With Long Label Text"
                />

                <NeobrutalismCheckbox
                  checked={false}
                  onChange={() => {}}
                  label="Disabled Checkbox"
                  disabled
                />
              </div>
            </NeobrutalismCard>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4 rotate-2">
              Interactive Elements
            </h2>
            <NeobrutalismCard className="bg-cyan-300">
              <div className="flex flex-col gap-6">
                <NeobrutalismButton onClick={() => alert('Button clicked!')}>
                  Default Button
                </NeobrutalismButton>

                <NeobrutalismButton
                  variant="secondary"
                  onClick={() => alert('Secondary button clicked!')}
                >
                  Secondary Button
                </NeobrutalismButton>

                <NeobrutalismButton onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </NeobrutalismButton>
              </div>
            </NeobrutalismCard>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4 -rotate-1">
              Slider Controls
            </h2>
            <NeobrutalismCard className="bg-pink-300">
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-bold mb-2">Basic Slider</label>
                  <NeobrutalismSlider
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                  />
                  <div className="mt-2 text-right font-bold">{sliderValue}%</div>
                </div>

                <div>
                  <label className="block text-lg font-bold mb-2">Disabled Slider</label>
                  <NeobrutalismSlider
                    value={75}
                    onChange={() => {}}
                    disabled
                  />
                  <div className="mt-2 text-right font-bold">75%</div>
                </div>
              </div>
            </NeobrutalismCard>
          </section>
        </div>
      </div>

      <NeobrutalismModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="text-black">
          <h3 className="text-2xl font-bold mb-4">
            Neobrutalism Modal
          </h3>
          <p className="mb-4">
            This is a modal with the signature Neobrutalism design style.
            Click outside or the button below to close.
          </p>
          <NeobrutalismButton onClick={() => setIsModalOpen(false)}>
            Close Modal
          </NeobrutalismButton>
        </div>
      </NeobrutalismModal>
    </div>
  );
};

export default NeobrutalismPlayground;