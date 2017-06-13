# Basics of Ruby

## Basic difference between puts and print

puts behaves like print in java.
and print behaves like println in java or equivalent to javascript's print

```ruby
print "he"
puts "hehe"
print "test"
=begin
console will print: 
hehe
test
=end
```

## Ruby has a .reverse method too!

```ruby
"hello".reverse
//will return olleh

```

## upcase and downcase

```ruby
puts "hello".upcase 
// prints HELLO
puts "Hi".downcase
// prints hi
```

## To print and retrieve data

gets.chomp allows us to get data.
```ruby

print "Integer please: "
user_num = Integer(gets.chomp)
```

