import React from 'react'
import { EditIcon, UniversityIcon } from '../../assets/icon/inputIcon'
import CustomButton from '../../customComponents/button/customButton'
import CustomCard from '../../customComponents/card/CustomCard'
import CustomInput from '../../customComponents/customTextInput'
import Dropdown from '../../customComponents/dropdown/dropdown'
import UnderLineText from '../../customComponents/under-line-text/underLineText'

const onclick = () => {

}
const options = ["Class12", "Class11", "Class10"];

const SelectInstitute = () => {
  return (
    <section>
      <UnderLineText text='Institute Selection' subText='When an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <CustomCard>
        <form>
          <Dropdown name="class" placeholder="Please Select" label="Select Institute" option={options} lefticon={<UniversityIcon />} />
          <CustomInput name="Other" placeholder="Type Here" type="text" label="Other" lefticon={<EditIcon />} />
          <CustomButton title="Continue" onClick={onclick} />
        </form>
      </CustomCard>
    </section>
  )
}

export default SelectInstitute
