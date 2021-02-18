<script lang="ts">
  export let tag: string

  const tagColors = {
    typescript: {
      bg: "#007acc",
      text: "white"
    },
    postgresql: {
      bg: "#32648C",
      text: "white"
    },
    php: {
      bg: "#7377AD",
      text: "white"
    },
    graphql: {
      bg: "#DC4B93",
      text: "white"
    },
    graphene: {
      bg: "#E5432D"
    },
    react: {
      bg: "#56D4FB",
      text: "#111"
    },
    django: {
      bg: "#4BA574",
    },
    apollo: {
      bg: "#122C4A",
    },
    webpack: {
      bg: "#1F74BA"
    },
    mysql: {
      bg: "#42759C"
    },
    jquery: {
      bg: "#1865A7"
    },
    html: {
      bg: "#DD4B2B"
    },
    css: {
      bg: "#1E73BA"
    },
    pandas: {
      bg: "#171455"
    },
    flask: {
      bg: "#282C33"
    },
    tensorflow: {
      bg: "#DF582C"
    }
  }
</script>

<style>
  div {
    @apply px-2.5 py-1.5 rounded-md text-sm text-white bg-gray-800;
  }
</style>

<div style={`background-color: ${tagColors[tag.toLowerCase()]?.bg}; color: ${tagColors[tag.toLowerCase()]?.text}`}>
  {tag}
</div>