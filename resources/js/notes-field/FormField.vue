<template>
  <notes-field :field="field" :resourceName="resourceName" :resourceId="resourceId" />
</template>

<script>
import { Errors, FormField, HandlesValidationErrors } from 'laravel-nova';
import { default as InteractsWithDates } from 'InteractsWithDates';
import NotesField from './components/NotesField';

export default {
  props: ['field', 'resourceId', 'resourceName'],
  components: { NotesField },
  mixins: [HandlesValidationErrors, FormField, InteractsWithDates],
  methods: {
    fill(formData) {
      // Do nothing, as this is an invisible field
    },
  },
};
</script>
