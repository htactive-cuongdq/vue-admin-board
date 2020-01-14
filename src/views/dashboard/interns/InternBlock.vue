<template>
  <div>
    <InternSearch @search="search" @cancel="cancel"></InternSearch>
    <div>
      <v-col>
        <v-btn class="primary" to="#">
          <v-icon left>mdi-account-plus-outline</v-icon>Add New Employee
        </v-btn>
      </v-col>
      <div>
        <v-data-table
          :headers="headers"
          :items="internActive"
          :options.sync="options"
          :server-items-length="totalInternBlock"
          :loading="loading"
          class="elevation-1"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus'
          }"
        >
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.username">
                <td>{{ item.username }}</td>
                <td>{{ item.full_name }}</td>
                <td>{{ item.sex_type ? 'Male':'Female' }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phoneNumber }}</td>
             <td>{{ item.startDate }}</td>
                <td>{{ item.endDate }}</td>
                <td class="d-flex justify-center align-center">
                  <v-btn text to="#">
                    <v-icon>mdi-lock-outline</v-icon>
                  </v-btn>
                  <v-btn text to="#">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>
  
<script>
import InternSearch from "./InternSearch";
import data from "../../../data/DataMenuDashBoard.json";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: { InternSearch },
  data() {
    return {
      headers: data.headersInternTable
    };
  },
  computed: {
    ...mapGetters("intern", {
      loadingTable: "loading",
      optionsTable: "options",
      totalInternBlockTable: "totalInternActive",
      internBlockTable: "internActive"
    }),
    loading: {
      get() {
        return this.loadingTable;
      },
      set(value) {
        this.setLoadingTable(value);
      }
    },
    options: {
      get() {
        return this.optionsTable;
      },
      set(value) {
        this.setOptionsTable(value);
      }
    },
    totalInternBlock: {
      get() {
        return this.totalInternBlockTable;
      },
      set(value) {
        this.setTotalInternBlockTable(value);
      }
    },
    internActive: {
      get() {
        return this.internBlockTable;
      },
      set(value) {
        this.setInternBlockTable(value);
      }
    }
  },
  methods: {
    ...mapMutations("intern", {
      setLoadingTable: "setLoading",
      setOptionsTable: "setOptions",
      setTotalInternBlockTable: "setTotalInternActive",
      setInternBlockTable: "setInternActive"
    }),
    ...mapActions("intern", { fetchInternBlock: "fetchInternBlock" }),
    search() {
      this.fetchInternBlock();
    },
    cancel() {
      this.fetchInternBlock();
    }
  },
  mounted() {
    this.fetchInternBlock();
  },
  watch: {
    options: {
      handler() {
        this.fetchInternBlock();
      },
      deep: true
    }
  }
};
</script>