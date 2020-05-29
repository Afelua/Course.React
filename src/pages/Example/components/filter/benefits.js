import React from 'react'
import FilterLink from '../../containers/benefitsFilter'
import { BenefitsFilters } from '../../actions'
import FormGroup from "@material-ui/core/FormGroup";

const Benefits = () => (
    <FormGroup row>
        <FormGroup>
            <FilterLink filter={BenefitsFilters.ANIMALS_ALLOWED}>
                Animals allowed
            </FilterLink>
            <FilterLink filter={BenefitsFilters.SMOOKING_ROOM}>
                Smooking Room
            </FilterLink>
            <FilterLink filter={BenefitsFilters.SEA_VIEW}>
                Sea View
            </FilterLink>
        </FormGroup>
        <FormGroup>
            <FilterLink filter={BenefitsFilters.SWIMMING_POOL}>
                Swimming pool
            </FilterLink>
            <FilterLink filter={BenefitsFilters.WI_FI}>
                Wi Fi 24 H
            </FilterLink>
            <FilterLink filter={BenefitsFilters.BREAKFAST_INCLUDED}>
                Breakfast Included
            </FilterLink>
        </FormGroup>
    </FormGroup>
);

export default Benefits
