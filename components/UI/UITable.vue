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
	width: fit-content;
	color: var(--white);
	background-color: rgba(255, 255, 255, 0.15);
	border: 1px solid rgba(255, 255, 255, 0.5);
	@include padding(40);

	table {
		border-collapse: collapse;
	}

	thead {
		th:nth-of-type(2) {
			border-left: 1px solid rgba(255, 255, 255, 0.5);
			border-right: 1px solid rgba(255, 255, 255, 0.5);
		}
	}

	tbody {
		tr {
			td {
				@include prop("padding-inline", 24);
				@include prop("padding-top", 24);

				&:first-of-type {
					border-left: 1px solid rgba(255, 255, 255, 0.5);
					border-right: 1px solid rgba(255, 255, 255, 0.5);
				}
			}
		}
	}
}
</style>
