<?php $categories = get_categories(); 
$cat_arr=[];

foreach($categories as $category) :
  array_push($cat_arr,$category->term_id);
endforeach; 
$all_cat = implode(",", $cat_arr);
?>
<ul class="cat-list">
  <div class="catclick">></div>
  <li class="first">
    <div class="cat-list_item allcat" data-slug="<?php echo $all_cat;?>">
      Wszystkie
    </div>
  </li>
  <?php foreach($categories as $category) : ?>
    <li>
      <div class="cat-list_item" data-slug="<?php echo $category->term_id ; ?>">
        <?php echo $category->name; ?>
      </div>
    </li>
  <?php endforeach; ?>
</ul>

