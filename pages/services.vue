<script setup lang="ts">
import { LucideHeadset } from "lucide-vue-next";
</script>

<template>
	<main>
		<PageHeader>
			<template #title>
				Nos services
			</template>

			<template #svg-background>
				<IconCustomGroup />
			</template>

			<template #icons>
				<PageHeaderIcons>
					<template #icon-1>
						<IconCustomChat />
					</template>
					<template #icon-2>
						<LucideHeadset stroke="var(--white)" stroke-width="2" />
					</template>
				</PageHeaderIcons>
			</template>
		</PageHeader>
	</main>
</template>
