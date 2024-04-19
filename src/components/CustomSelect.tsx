import { IOption, ICustomStyle } from "@/types"

interface ICustomSelectProps {
  options: IOption[]
  customStyle: ICustomStyle
  onSelectChange: (selectedValue: string) => void;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({ options, customStyle, onSelectChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelectChange(selectedValue);
  };

  return (
    <div>
      <select
        style={customStyle}
        onChange={handleSelectChange} >
        {options.map((option) => (
          <option key={option.value} value={option.value} >{ option.label }</option>
        ))}
      </select>
    </div>
  )
}
export default CustomSelect;