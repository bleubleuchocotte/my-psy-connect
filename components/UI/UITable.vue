<script setup lang="ts">
const id = useId();
</script>

<template>
	<div class="ui-table">
		<table>
			<thead>
				<tr>
					<th scope="col" />
					<th scope="col">
						<p>
							Sans<br>MyPsy
						</p>
					</th>
					<th scope="col">
						<p>
							Avec<br>MyPsy
						</p>
					</th>
				</tr>
			</thead>
			<tbody v-if="$slots.default">
				<tr v-for="(item, a) in $slots.default()" :key="`item-${a}-${id}`">
					<th>
						<component :is="item" />
					</th>
					<td><IconClose /></td>
					<td><IconTick /></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped lang="scss">
.ui-table {
	color: var(--white);

	backdrop-filter: var(--blur);

	@include prop("border-radius", 10);

	@include prop("padding-block", 40);
	@include prop("padding-left", 40);
	@include prop("padding-right", 16);

	table {
		border-collapse: collapse;
	}

	thead {
		th:nth-of-type(2) {
			border-left: 1px solid rgba(255, 255, 255, 0.5);
			border-right: 1px solid rgba(255, 255, 255, 0.5);
		}
		th:not(:first-of-type) {
			@include prop("padding-inline", 24);
		}
	}

	tbody {
		tr {
			td {
				@include prop("padding-top", 24);

				&:first-of-type {
					border-left: 1px solid rgba(255, 255, 255, 0.5);
					border-right: 1px solid rgba(255, 255, 255, 0.5);
				}

				svg {
					margin: 0 auto;
				}
			}
		}
	}
}
</style>
