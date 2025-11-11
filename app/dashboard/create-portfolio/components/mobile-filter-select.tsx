import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const SelectDemo = ({ setActiveFilter } : {
    setActiveFilter: (value: string) => void
}) => {

  return (
    <Select 
        onValueChange={(e)=>{
            setActiveFilter(e)
        }}
        defaultValue="all"
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue defaultValue={"all"} placeholder="All Templates" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="all">All Templates</SelectItem>
          <SelectItem value="used">Previously Used</SelectItem>
          <SelectItem value="new">New Templates</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
