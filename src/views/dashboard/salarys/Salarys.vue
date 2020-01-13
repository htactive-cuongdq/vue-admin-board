<template>
  <div>
    <SalarysSearch @search="search" @cancel="cancel"></SalarysSearch>
    <div>
      <!-- <v-col>
        <v-btn class="primary" to="#">
          <v-icon left>mdi-account-plus-outline</v-icon>Add New Employee
        </v-btn>
      </v-col>-->
      <div>
        <v-data-table
          :headers="headers"
          :items="Salarys"
          :options.sync="options"
          :server-items-length="totalSalarys"
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
                <td>{{item.user && item.user.full_name}}</td>
                <td>{{ item.total_salary }}</td>
                <td>{{ item.payment_salary_date }}</td>
                <td>{{ item.updateAt }}</td>

                <td class="d-flex justify-center align-center">
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
import SalarysSearch from "./SalarysSearch";
import data from "../../../data/DataMenuDashBoard.json";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: { SalarysSearch },
  data() {
    return {
      headers: data.headersSalarysTable,
    };
  },
  computed: {
    ...mapGetters("salarys", {
      loadingTable: "loading",
      optionsTable: "options",
      totalSalarysTable: "totalSalarys",
      SalarysTable: "Salarys"
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
    totalSalarys: {
      get() {
        return this.totalSalarysTable;
      },
      set(value) {
        this.setTotalSalarysTable(value);
      }
    },

    Salarys: {

      get() {
        return this.SalarysTable;
      },
      set(value) {
        this.setSalarysTable(value);
      }
    }
  },

  methods: {
    ...mapMutations("salarys", {
      setLoadingTable: "setLoading",
      setOptionsTable: "setOptions",
      setTotalSalarysTable: "setTotalSalarys",
      setSalarysTable: "setSalarys"
    }),
    ...mapActions("salarys", { fetchSalarys: "fetchSalarys" }),
    search() {
      this.fetchSalarys();
    },
    cancel() {
      this.fetchSalarys();
    },

  },
  mounted() {
    this.fetchSalarys();
  },
  watch: {
    options: {
      handler() {
        this.fetchSalarys();
      },
      deep: true
    }
  }
};
</script>