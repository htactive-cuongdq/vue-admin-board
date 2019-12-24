<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="{ name: child.url, params: { id: 'active' } }"
            >
              <div>
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ child.text }}</v-list-item-title>
                </v-list-item-content>
              </div>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left row>
      <div class="col-md-1" style="flex: 0 0 5.333333%;">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
      <div class="col-md-2">
        <v-toolbar-title>HT-ACTIVE</v-toolbar-title>
      </div>
      <div class="col-md-9">
        <div class="row d-flex flex-row-reverse">
          <v-btn
            style="margin-top: 3px; margin-left:5px"
            v-on:click="router.push({ name: 'login'}) "
          >LogOut</v-btn>
          <v-btn style="margin-top: 3px; margin-left:5px">User</v-btn>
        </div>
      </div>
    </v-app-bar>
      <router-view></router-view>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Quản Lý Tài Khoản",
        model: false,
        children: [
          { text: "Tài khoản đang hoạt động", url: "active" },
          { text: "Tài khoản đang bị khóa", url: "block" },
          { text: "Quản lý quyền tài khoản", url: "manageacc" }
        ]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Quản lý lương nhân viên",
        model: false,
        children: [{ text: "Danh sách lương của nhân viên", url: "QLLuong"}]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Quản lý thực tập sinh",
        model: false,
        children: [
          { text: "Thực tập sinh đang hoạt động", url: "InternActive" },
          { text: "Thực tập sinh đã rời công ty", url: "InternBlock" }
        ]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Quản lý ngày vắng",
        model: false,
        children: [
          { text: "Thống kê ngày vắng" },
          { text: "Danh sách nhân viên vắng" },
          { text: "Danh sách thực tập sinh vắng" }
        ]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Quản lý CV",
        model: false,
        children: [
          { text: "Thống kê CV" },
          { text: "Danh sách CV nộp vào công ty" },
          { text: "CV Thực tập" },
          { text: "CV Nhân viên" }
        ]
      },

      { icon: "mdi-settings", text: "LogOut" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script> 